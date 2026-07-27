import EvoluniaDonationsKeywordPage, { generateMetadata } from './evolunia-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaDonationsKeywordPage />;
}
