import BaiakStatusSwedenKeywordPage, { generateMetadata } from './baiak-status-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakStatusSwedenKeywordPage />;
}
