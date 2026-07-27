import OldSchoolMiracleClientKeywordPage, { generateMetadata } from './old-school-miracle-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMiracleClientKeywordPage />;
}
