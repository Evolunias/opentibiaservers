import BlazeraDonationsKeywordPage, { generateMetadata } from './blazera-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraDonationsKeywordPage />;
}
