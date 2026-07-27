import OldSchoolTibiaretroRegisterKeywordPage, { generateMetadata } from './old-school-tibiaretro-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaretroRegisterKeywordPage />;
}
