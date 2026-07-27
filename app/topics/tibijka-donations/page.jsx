import TibijkaDonationsKeywordPage, { generateMetadata } from './tibijka-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaDonationsKeywordPage />;
}
