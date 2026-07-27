import OldSchoolTibiaServerRegisterKeywordPage, { generateMetadata } from './old-school-tibia-server-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaServerRegisterKeywordPage />;
}
