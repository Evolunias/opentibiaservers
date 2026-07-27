import WithReviewsTibiameHighscoresKeywordPage, { generateMetadata } from './with-reviews-tibiame-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiameHighscoresKeywordPage />;
}
