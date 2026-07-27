import BaiakStatusPolandKeywordPage, { generateMetadata } from './baiak-status-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakStatusPolandKeywordPage />;
}
