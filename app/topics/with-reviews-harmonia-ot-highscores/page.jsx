import WithReviewsHarmoniaOtHighscoresKeywordPage, { generateMetadata } from './with-reviews-harmonia-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsHarmoniaOtHighscoresKeywordPage />;
}
