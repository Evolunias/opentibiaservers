import OriginaltibiaMarketKeywordPage, { generateMetadata } from './originaltibia-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaMarketKeywordPage />;
}
