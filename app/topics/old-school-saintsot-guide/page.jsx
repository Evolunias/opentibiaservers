import OldSchoolSaintsotGuideKeywordPage, { generateMetadata } from './old-school-saintsot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSaintsotGuideKeywordPage />;
}
