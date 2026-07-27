import Classicus1098OldSchoolServerKeywordPage, { generateMetadata } from './classicus-10-98-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus1098OldSchoolServerKeywordPage />;
}
