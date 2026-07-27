import Classicus81OldSchoolServerKeywordPage, { generateMetadata } from './classicus-8-1-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus81OldSchoolServerKeywordPage />;
}
