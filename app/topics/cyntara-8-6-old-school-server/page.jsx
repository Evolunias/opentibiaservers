import Cyntara86OldSchoolServerKeywordPage, { generateMetadata } from './cyntara-8-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara86OldSchoolServerKeywordPage />;
}
