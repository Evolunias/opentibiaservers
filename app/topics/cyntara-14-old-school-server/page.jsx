import Cyntara14OldSchoolServerKeywordPage, { generateMetadata } from './cyntara-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara14OldSchoolServerKeywordPage />;
}
