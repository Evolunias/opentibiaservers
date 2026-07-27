import WithReviewsAlasteraHighscoresKeywordPage, { generateMetadata } from './with-reviews-alastera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAlasteraHighscoresKeywordPage />;
}
