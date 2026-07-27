import Classicus86OldSchoolServerKeywordPage, { generateMetadata } from './classicus-8-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus86OldSchoolServerKeywordPage />;
}
