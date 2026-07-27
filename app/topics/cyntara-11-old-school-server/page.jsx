import Cyntara11OldSchoolServerKeywordPage, { generateMetadata } from './cyntara-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara11OldSchoolServerKeywordPage />;
}
