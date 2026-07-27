import OldSchoolTibiaretroTibiaKeywordPage, { generateMetadata } from './old-school-tibiaretro-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaretroTibiaKeywordPage />;
}
