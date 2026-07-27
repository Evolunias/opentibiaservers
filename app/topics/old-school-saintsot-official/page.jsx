import OldSchoolSaintsotOfficialKeywordPage, { generateMetadata } from './old-school-saintsot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSaintsotOfficialKeywordPage />;
}
