import OldSchoolTibiantisRegisterKeywordPage, { generateMetadata } from './old-school-tibiantis-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiantisRegisterKeywordPage />;
}
