import OldSchoolServerListSwedenKeywordPage, { generateMetadata } from './old-school-server-list-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolServerListSwedenKeywordPage />;
}
