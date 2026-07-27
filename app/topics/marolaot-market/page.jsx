import MarolaotMarketKeywordPage, { generateMetadata } from './marolaot-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotMarketKeywordPage />;
}
