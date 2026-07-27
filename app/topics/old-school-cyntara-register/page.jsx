import OldSchoolCyntaraRegisterKeywordPage, { generateMetadata } from './old-school-cyntara-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCyntaraRegisterKeywordPage />;
}
