import BestMediviaHighscoresKeywordPage, { generateMetadata } from './best-medivia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMediviaHighscoresKeywordPage />;
}
