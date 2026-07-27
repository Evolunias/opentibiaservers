import UnlineMarketKeywordPage, { generateMetadata } from './unline-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineMarketKeywordPage />;
}
