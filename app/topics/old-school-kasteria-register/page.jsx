import OldSchoolKasteriaRegisterKeywordPage, { generateMetadata } from './old-school-kasteria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolKasteriaRegisterKeywordPage />;
}
