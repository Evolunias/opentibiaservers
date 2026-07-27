import Coxaot13OldSchoolServerKeywordPage, { generateMetadata } from './coxaot-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot13OldSchoolServerKeywordPage />;
}
