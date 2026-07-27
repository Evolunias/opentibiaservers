import BaiakServerEuropeKeywordPage, { generateMetadata } from './baiak-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServerEuropeKeywordPage />;
}
