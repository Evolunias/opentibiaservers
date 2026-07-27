import Coxaot11OldSchoolServerKeywordPage, { generateMetadata } from './coxaot-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot11OldSchoolServerKeywordPage />;
}
