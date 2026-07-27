import Classicus13OldSchoolServerKeywordPage, { generateMetadata } from './classicus-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus13OldSchoolServerKeywordPage />;
}
