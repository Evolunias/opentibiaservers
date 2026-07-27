import OldSchoolImperianicRegisterKeywordPage, { generateMetadata } from './old-school-imperianic-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolImperianicRegisterKeywordPage />;
}
