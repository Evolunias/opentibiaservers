import TaleonSanpvpServerReviewPage, { generateMetadata } from './taleon-sanpvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TaleonSanpvpServerReviewPage />;
}
