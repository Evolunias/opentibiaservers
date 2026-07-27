import DuraOnlineMarketKeywordPage, { generateMetadata } from './dura-online-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineMarketKeywordPage />;
}
