import Classicus76OldSchoolServerKeywordPage, { generateMetadata } from './classicus-7-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus76OldSchoolServerKeywordPage />;
}
