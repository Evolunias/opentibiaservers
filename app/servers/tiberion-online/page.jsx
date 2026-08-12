import TiberionOnlineServerReviewPage, { generateMetadata } from './tiberion-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TiberionOnlineServerReviewPage />;
}
