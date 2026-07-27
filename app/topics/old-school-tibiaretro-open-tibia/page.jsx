import OldSchoolTibiaretroOpenTibiaKeywordPage, { generateMetadata } from './old-school-tibiaretro-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaretroOpenTibiaKeywordPage />;
}
