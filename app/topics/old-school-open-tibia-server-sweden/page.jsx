import OldSchoolOpenTibiaServerSwedenKeywordPage, { generateMetadata } from './old-school-open-tibia-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOpenTibiaServerSwedenKeywordPage />;
}
