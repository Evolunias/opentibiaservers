import OldSchoolRegisterBrazilKeywordPage, { generateMetadata } from './old-school-register-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRegisterBrazilKeywordPage />;
}
