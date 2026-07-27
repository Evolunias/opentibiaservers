import OldSchoolSaintsotTibiaKeywordPage, { generateMetadata } from './old-school-saintsot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSaintsotTibiaKeywordPage />;
}
