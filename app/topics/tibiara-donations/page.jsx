import TibiaraDonationsKeywordPage, { generateMetadata } from './tibiara-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraDonationsKeywordPage />;
}
