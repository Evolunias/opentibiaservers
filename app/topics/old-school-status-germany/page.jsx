import OldSchoolStatusGermanyKeywordPage, { generateMetadata } from './old-school-status-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolStatusGermanyKeywordPage />;
}
