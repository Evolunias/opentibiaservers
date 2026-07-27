import OldSchoolMiracleOtKeywordPage, { generateMetadata } from './old-school-miracle-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMiracleOtKeywordPage />;
}
