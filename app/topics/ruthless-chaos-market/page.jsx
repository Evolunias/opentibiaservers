import RuthlessChaosMarketKeywordPage, { generateMetadata } from './ruthless-chaos-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosMarketKeywordPage />;
}
