import OldSchoolRegisterFranceKeywordPage, { generateMetadata } from './old-school-register-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRegisterFranceKeywordPage />;
}
