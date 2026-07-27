import OldSchoolTibiaretroOtKeywordPage, { generateMetadata } from './old-school-tibiaretro-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaretroOtKeywordPage />;
}
