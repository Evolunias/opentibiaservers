import Cyntara13OldSchoolServerKeywordPage, { generateMetadata } from './cyntara-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara13OldSchoolServerKeywordPage />;
}
