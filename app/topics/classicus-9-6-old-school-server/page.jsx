import Classicus96OldSchoolServerKeywordPage, { generateMetadata } from './classicus-9-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus96OldSchoolServerKeywordPage />;
}
