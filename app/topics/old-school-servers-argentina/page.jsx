import OldSchoolServersArgentinaKeywordPage, { generateMetadata } from './old-school-servers-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolServersArgentinaKeywordPage />;
}
