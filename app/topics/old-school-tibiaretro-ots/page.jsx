import OldSchoolTibiaretroOtsKeywordPage, { generateMetadata } from './old-school-tibiaretro-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaretroOtsKeywordPage />;
}
