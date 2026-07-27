import OldSchoolTibiaretroOfficialKeywordPage, { generateMetadata } from './old-school-tibiaretro-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaretroOfficialKeywordPage />;
}
