import BaiakStatusEuropeKeywordPage, { generateMetadata } from './baiak-status-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakStatusEuropeKeywordPage />;
}
