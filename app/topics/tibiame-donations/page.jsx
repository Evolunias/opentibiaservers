import TibiameDonationsKeywordPage, { generateMetadata } from './tibiame-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameDonationsKeywordPage />;
}
