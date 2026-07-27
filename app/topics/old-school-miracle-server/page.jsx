import OldSchoolMiracleServerKeywordPage, { generateMetadata } from './old-school-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMiracleServerKeywordPage />;
}
