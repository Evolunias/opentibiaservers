import ArchlightBaiakServerEuropeKeywordPage, { generateMetadata } from './archlight-baiak-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightBaiakServerEuropeKeywordPage />;
}
