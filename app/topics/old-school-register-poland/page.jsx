import OldSchoolRegisterPolandKeywordPage, { generateMetadata } from './old-school-register-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRegisterPolandKeywordPage />;
}
