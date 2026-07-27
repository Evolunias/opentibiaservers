import Coxaot15OldSchoolServerKeywordPage, { generateMetadata } from './coxaot-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot15OldSchoolServerKeywordPage />;
}
