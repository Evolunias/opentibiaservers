import AmeriaDonationsKeywordPage, { generateMetadata } from './ameria-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaDonationsKeywordPage />;
}
