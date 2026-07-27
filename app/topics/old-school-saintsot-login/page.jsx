import OldSchoolSaintsotLoginKeywordPage, { generateMetadata } from './old-school-saintsot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSaintsotLoginKeywordPage />;
}
