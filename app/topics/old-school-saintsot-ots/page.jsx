import OldSchoolSaintsotOtsKeywordPage, { generateMetadata } from './old-school-saintsot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSaintsotOtsKeywordPage />;
}
