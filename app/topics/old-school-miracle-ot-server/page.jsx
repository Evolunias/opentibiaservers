import OldSchoolMiracleOtServerKeywordPage, { generateMetadata } from './old-school-miracle-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMiracleOtServerKeywordPage />;
}
