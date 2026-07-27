import Classicus14OldSchoolServerKeywordPage, { generateMetadata } from './classicus-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus14OldSchoolServerKeywordPage />;
}
