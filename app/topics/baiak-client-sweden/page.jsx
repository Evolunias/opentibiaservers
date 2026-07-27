import BaiakClientSwedenKeywordPage, { generateMetadata } from './baiak-client-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakClientSwedenKeywordPage />;
}
