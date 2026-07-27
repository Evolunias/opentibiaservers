import OldSchoolOtServerSwedenKeywordPage, { generateMetadata } from './old-school-ot-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtServerSwedenKeywordPage />;
}
