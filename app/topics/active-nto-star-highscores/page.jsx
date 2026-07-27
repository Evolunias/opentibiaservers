import ActiveNtoStarHighscoresKeywordPage, { generateMetadata } from './active-nto-star-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNtoStarHighscoresKeywordPage />;
}
