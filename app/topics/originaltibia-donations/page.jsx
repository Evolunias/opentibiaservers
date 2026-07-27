import OriginaltibiaDonationsKeywordPage, { generateMetadata } from './originaltibia-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaDonationsKeywordPage />;
}
