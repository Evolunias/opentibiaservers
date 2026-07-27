import Classicus12OldSchoolServerKeywordPage, { generateMetadata } from './classicus-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus12OldSchoolServerKeywordPage />;
}
