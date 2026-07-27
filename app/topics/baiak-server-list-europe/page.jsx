import BaiakServerListEuropeKeywordPage, { generateMetadata } from './baiak-server-list-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServerListEuropeKeywordPage />;
}
