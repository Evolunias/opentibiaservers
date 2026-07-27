import OldSchoolTibiaretroGuideKeywordPage, { generateMetadata } from './old-school-tibiaretro-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaretroGuideKeywordPage />;
}
