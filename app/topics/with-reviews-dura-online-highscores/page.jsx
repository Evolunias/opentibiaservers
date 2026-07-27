import WithReviewsDuraOnlineHighscoresKeywordPage, { generateMetadata } from './with-reviews-dura-online-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsDuraOnlineHighscoresKeywordPage />;
}
