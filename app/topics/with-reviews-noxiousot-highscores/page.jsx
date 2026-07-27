import WithReviewsNoxiousotHighscoresKeywordPage, { generateMetadata } from './with-reviews-noxiousot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNoxiousotHighscoresKeywordPage />;
}
