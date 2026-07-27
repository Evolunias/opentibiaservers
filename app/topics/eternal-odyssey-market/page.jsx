import EternalOdysseyMarketKeywordPage, { generateMetadata } from './eternal-odyssey-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyMarketKeywordPage />;
}
