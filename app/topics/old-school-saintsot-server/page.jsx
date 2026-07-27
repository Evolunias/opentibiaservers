import OldSchoolSaintsotServerKeywordPage, { generateMetadata } from './old-school-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSaintsotServerKeywordPage />;
}
