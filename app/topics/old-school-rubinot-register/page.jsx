import OldSchoolRubinotRegisterKeywordPage, { generateMetadata } from './old-school-rubinot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRubinotRegisterKeywordPage />;
}
