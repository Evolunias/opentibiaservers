import Classicus100OldSchoolServerKeywordPage, { generateMetadata } from './classicus-10-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus100OldSchoolServerKeywordPage />;
}
