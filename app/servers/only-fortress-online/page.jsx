import OnlyFortressOnlineServerReviewPage, { generateMetadata } from './only-fortress-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OnlyFortressOnlineServerReviewPage />;
}
