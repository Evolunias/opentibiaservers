import OldSchoolRegisterGermanyKeywordPage, { generateMetadata } from './old-school-register-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRegisterGermanyKeywordPage />;
}
