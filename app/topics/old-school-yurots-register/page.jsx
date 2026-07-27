import OldSchoolYurotsRegisterKeywordPage, { generateMetadata } from './old-school-yurots-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolYurotsRegisterKeywordPage />;
}
