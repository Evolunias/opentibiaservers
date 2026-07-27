import OldSchoolSaintsotOtServerKeywordPage, { generateMetadata } from './old-school-saintsot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSaintsotOtServerKeywordPage />;
}
