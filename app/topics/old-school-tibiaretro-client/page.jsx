import OldSchoolTibiaretroClientKeywordPage, { generateMetadata } from './old-school-tibiaretro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaretroClientKeywordPage />;
}
