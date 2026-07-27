import OldSchoolRegisterSwedenKeywordPage, { generateMetadata } from './old-school-register-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRegisterSwedenKeywordPage />;
}
