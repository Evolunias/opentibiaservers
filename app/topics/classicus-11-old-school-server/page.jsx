import Classicus11OldSchoolServerKeywordPage, { generateMetadata } from './classicus-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus11OldSchoolServerKeywordPage />;
}
