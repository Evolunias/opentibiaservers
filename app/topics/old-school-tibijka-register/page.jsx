import OldSchoolTibijkaRegisterKeywordPage, { generateMetadata } from './old-school-tibijka-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibijkaRegisterKeywordPage />;
}
