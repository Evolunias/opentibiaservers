import ZamoniaotRlMapServerReviewPage, { generateMetadata } from './zamoniaot-rl-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZamoniaotRlMapServerReviewPage />;
}
