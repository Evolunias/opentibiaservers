import ArchlightMarketKeywordPage, { generateMetadata } from './archlight-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightMarketKeywordPage />;
}
