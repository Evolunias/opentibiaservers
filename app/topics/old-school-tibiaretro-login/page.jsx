import OldSchoolTibiaretroLoginKeywordPage, { generateMetadata } from './old-school-tibiaretro-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaretroLoginKeywordPage />;
}
