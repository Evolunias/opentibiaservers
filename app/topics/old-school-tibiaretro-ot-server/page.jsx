import OldSchoolTibiaretroOtServerKeywordPage, { generateMetadata } from './old-school-tibiaretro-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaretroOtServerKeywordPage />;
}
