import VenoreotMarketKeywordPage, { generateMetadata } from './venoreot-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotMarketKeywordPage />;
}
