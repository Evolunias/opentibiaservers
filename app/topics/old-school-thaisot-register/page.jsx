import OldSchoolThaisotRegisterKeywordPage, { generateMetadata } from './old-school-thaisot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThaisotRegisterKeywordPage />;
}
