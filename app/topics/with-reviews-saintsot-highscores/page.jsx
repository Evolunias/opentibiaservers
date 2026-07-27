import WithReviewsSaintsotHighscoresKeywordPage, { generateMetadata } from './with-reviews-saintsot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSaintsotHighscoresKeywordPage />;
}
