import OldSchoolMiracleOfficialKeywordPage, { generateMetadata } from './old-school-miracle-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMiracleOfficialKeywordPage />;
}
