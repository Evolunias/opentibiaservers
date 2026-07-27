import OldSchoolMiracleOtsKeywordPage, { generateMetadata } from './old-school-miracle-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMiracleOtsKeywordPage />;
}
