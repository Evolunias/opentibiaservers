import OldSchoolMiracleKeywordPage, { generateMetadata } from './old-school-miracle';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMiracleKeywordPage />;
}
