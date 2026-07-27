import Coxaot14OldSchoolServerKeywordPage, { generateMetadata } from './coxaot-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot14OldSchoolServerKeywordPage />;
}
