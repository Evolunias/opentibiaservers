import OldSchoolEvoluniaRegisterKeywordPage, { generateMetadata } from './old-school-evolunia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoluniaRegisterKeywordPage />;
}
