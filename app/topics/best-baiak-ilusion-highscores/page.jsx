import BestBaiakIlusionHighscoresKeywordPage, { generateMetadata } from './best-baiak-ilusion-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestBaiakIlusionHighscoresKeywordPage />;
}
