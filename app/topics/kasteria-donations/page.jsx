import KasteriaDonationsKeywordPage, { generateMetadata } from './kasteria-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaDonationsKeywordPage />;
}
