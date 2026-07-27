import BaiakServerOldSchoolKeywordPage, { generateMetadata } from './baiak-server-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServerOldSchoolKeywordPage />;
}
