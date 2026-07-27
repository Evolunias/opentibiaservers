import OldSchoolNepreniaRegisterKeywordPage, { generateMetadata } from './old-school-neprenia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNepreniaRegisterKeywordPage />;
}
