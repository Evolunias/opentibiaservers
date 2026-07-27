import OldSchoolSaintsotOtKeywordPage, { generateMetadata } from './old-school-saintsot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSaintsotOtKeywordPage />;
}
