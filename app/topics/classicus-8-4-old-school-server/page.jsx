import Classicus84OldSchoolServerKeywordPage, { generateMetadata } from './classicus-8-4-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus84OldSchoolServerKeywordPage />;
}
