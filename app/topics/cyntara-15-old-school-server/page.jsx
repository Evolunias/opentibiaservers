import Cyntara15OldSchoolServerKeywordPage, { generateMetadata } from './cyntara-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara15OldSchoolServerKeywordPage />;
}
