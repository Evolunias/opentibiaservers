import DraconiaotServerReviewPage, { generateMetadata } from './draconiaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DraconiaotServerReviewPage />;
}
