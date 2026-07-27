import OldSchoolSaintsotClientKeywordPage, { generateMetadata } from './old-school-saintsot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSaintsotClientKeywordPage />;
}
