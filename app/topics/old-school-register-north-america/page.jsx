import OldSchoolRegisterNorthAmericaKeywordPage, { generateMetadata } from './old-school-register-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRegisterNorthAmericaKeywordPage />;
}
