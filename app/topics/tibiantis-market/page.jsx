import TibiantisMarketKeywordPage, { generateMetadata } from './tibiantis-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisMarketKeywordPage />;
}
