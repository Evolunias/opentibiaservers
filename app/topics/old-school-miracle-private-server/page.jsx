import OldSchoolMiraclePrivateServerKeywordPage, { generateMetadata } from './old-school-miracle-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMiraclePrivateServerKeywordPage />;
}
