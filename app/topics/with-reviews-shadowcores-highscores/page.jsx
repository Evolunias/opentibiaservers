import WithReviewsShadowcoresHighscoresKeywordPage, { generateMetadata } from './with-reviews-shadowcores-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsShadowcoresHighscoresKeywordPage />;
}
