import NepreniaMarketKeywordPage, { generateMetadata } from './neprenia-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaMarketKeywordPage />;
}
