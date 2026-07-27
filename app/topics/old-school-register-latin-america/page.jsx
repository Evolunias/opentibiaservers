import OldSchoolRegisterLatinAmericaKeywordPage, { generateMetadata } from './old-school-register-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRegisterLatinAmericaKeywordPage />;
}
