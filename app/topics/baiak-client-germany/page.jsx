import BaiakClientGermanyKeywordPage, { generateMetadata } from './baiak-client-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakClientGermanyKeywordPage />;
}
