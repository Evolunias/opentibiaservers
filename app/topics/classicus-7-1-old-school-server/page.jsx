import Classicus71OldSchoolServerKeywordPage, { generateMetadata } from './classicus-7-1-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus71OldSchoolServerKeywordPage />;
}
