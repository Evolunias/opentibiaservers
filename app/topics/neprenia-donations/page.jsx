import NepreniaDonationsKeywordPage, { generateMetadata } from './neprenia-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaDonationsKeywordPage />;
}
