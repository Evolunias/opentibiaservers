import OldSchoolStatusSwedenKeywordPage, { generateMetadata } from './old-school-status-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolStatusSwedenKeywordPage />;
}
