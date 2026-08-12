import ImperialAgeOnlineServerReviewPage, { generateMetadata } from './imperial-age-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperialAgeOnlineServerReviewPage />;
}
