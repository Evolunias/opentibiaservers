import ThorniaDonationsKeywordPage, { generateMetadata } from './thornia-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaDonationsKeywordPage />;
}
