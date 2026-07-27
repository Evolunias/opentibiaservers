import OldSchoolMiracleGuideKeywordPage, { generateMetadata } from './old-school-miracle-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMiracleGuideKeywordPage />;
}
