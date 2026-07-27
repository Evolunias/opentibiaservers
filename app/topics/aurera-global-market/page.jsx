import AureraGlobalMarketKeywordPage, { generateMetadata } from './aurera-global-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalMarketKeywordPage />;
}
