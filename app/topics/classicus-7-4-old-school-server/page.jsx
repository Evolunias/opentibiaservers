import Classicus74OldSchoolServerKeywordPage, { generateMetadata } from './classicus-7-4-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus74OldSchoolServerKeywordPage />;
}
