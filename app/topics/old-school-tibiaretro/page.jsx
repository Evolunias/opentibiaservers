import OldSchoolTibiaretroKeywordPage, { generateMetadata } from './old-school-tibiaretro';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaretroKeywordPage />;
}
