import OldSchoolTibiaretroWikiKeywordPage, { generateMetadata } from './old-school-tibiaretro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaretroWikiKeywordPage />;
}
