import OlderaDonationsKeywordPage, { generateMetadata } from './oldera-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaDonationsKeywordPage />;
}
