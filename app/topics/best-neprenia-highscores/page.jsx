import BestNepreniaHighscoresKeywordPage, { generateMetadata } from './best-neprenia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNepreniaHighscoresKeywordPage />;
}
