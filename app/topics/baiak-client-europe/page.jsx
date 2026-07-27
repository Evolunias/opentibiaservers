import BaiakClientEuropeKeywordPage, { generateMetadata } from './baiak-client-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakClientEuropeKeywordPage />;
}
