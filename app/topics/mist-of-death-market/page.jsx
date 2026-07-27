import MistOfDeathMarketKeywordPage, { generateMetadata } from './mist-of-death-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathMarketKeywordPage />;
}
