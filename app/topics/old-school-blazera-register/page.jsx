import OldSchoolBlazeraRegisterKeywordPage, { generateMetadata } from './old-school-blazera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBlazeraRegisterKeywordPage />;
}
