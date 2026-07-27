import OldSchoolUnlineOfficialKeywordPage, { generateMetadata } from './old-school-unline-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolUnlineOfficialKeywordPage />;
}
