import OldSchoolTibiaretroServerKeywordPage, { generateMetadata } from './old-school-tibiaretro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaretroServerKeywordPage />;
}
