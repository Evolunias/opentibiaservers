import OldSchoolRegisterEuropeKeywordPage, { generateMetadata } from './old-school-register-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRegisterEuropeKeywordPage />;
}
