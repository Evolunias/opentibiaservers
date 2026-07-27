import OldSchoolNostaltherRegisterKeywordPage, { generateMetadata } from './old-school-nostalther-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNostaltherRegisterKeywordPage />;
}
