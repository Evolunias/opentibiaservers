import WithReviewsSabrehavenHighscoresKeywordPage, { generateMetadata } from './with-reviews-sabrehaven-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSabrehavenHighscoresKeywordPage />;
}
