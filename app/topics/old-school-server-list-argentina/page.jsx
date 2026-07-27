import OldSchoolServerListArgentinaKeywordPage, { generateMetadata } from './old-school-server-list-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolServerListArgentinaKeywordPage />;
}
