import NewNepreniaHighscoresKeywordPage, { generateMetadata } from './new-neprenia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNepreniaHighscoresKeywordPage />;
}
