import MediviaMarketKeywordPage, { generateMetadata } from './medivia-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaMarketKeywordPage />;
}
