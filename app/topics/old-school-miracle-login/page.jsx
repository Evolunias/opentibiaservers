import OldSchoolMiracleLoginKeywordPage, { generateMetadata } from './old-school-miracle-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMiracleLoginKeywordPage />;
}
