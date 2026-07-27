import OldSchoolOxygenotRegisterKeywordPage, { generateMetadata } from './old-school-oxygenot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOxygenotRegisterKeywordPage />;
}
