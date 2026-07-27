import BaiakStatusGermanyKeywordPage, { generateMetadata } from './baiak-status-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakStatusGermanyKeywordPage />;
}
