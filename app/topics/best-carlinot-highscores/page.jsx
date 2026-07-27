import BestCarlinotHighscoresKeywordPage, { generateMetadata } from './best-carlinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCarlinotHighscoresKeywordPage />;
}
