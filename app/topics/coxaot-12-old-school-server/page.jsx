import Coxaot12OldSchoolServerKeywordPage, { generateMetadata } from './coxaot-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot12OldSchoolServerKeywordPage />;
}
