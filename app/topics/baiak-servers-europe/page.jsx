import BaiakServersEuropeKeywordPage, { generateMetadata } from './baiak-servers-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServersEuropeKeywordPage />;
}
