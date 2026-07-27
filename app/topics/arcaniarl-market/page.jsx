import ArcaniarlMarketKeywordPage, { generateMetadata } from './arcaniarl-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlMarketKeywordPage />;
}
