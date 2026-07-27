import NewNtoStarHighscoresKeywordPage, { generateMetadata } from './new-nto-star-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNtoStarHighscoresKeywordPage />;
}
