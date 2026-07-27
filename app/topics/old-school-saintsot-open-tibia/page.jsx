import OldSchoolSaintsotOpenTibiaKeywordPage, { generateMetadata } from './old-school-saintsot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSaintsotOpenTibiaKeywordPage />;
}
