import WithReviewsGunzodusHighscoresKeywordPage, { generateMetadata } from './with-reviews-gunzodus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsGunzodusHighscoresKeywordPage />;
}
