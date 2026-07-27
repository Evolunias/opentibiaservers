import MediviaDonationsKeywordPage, { generateMetadata } from './medivia-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaDonationsKeywordPage />;
}
