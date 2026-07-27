import BestArchlightHighscoresKeywordPage, { generateMetadata } from './best-archlight-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArchlightHighscoresKeywordPage />;
}
