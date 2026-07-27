import AlasteraDonationsKeywordPage, { generateMetadata } from './alastera-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraDonationsKeywordPage />;
}
