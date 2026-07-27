import OldSchoolTibianusRegisterKeywordPage, { generateMetadata } from './old-school-tibianus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibianusRegisterKeywordPage />;
}
