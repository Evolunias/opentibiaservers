import Venoreot80OldSchoolServerKeywordPage, { generateMetadata } from './venoreot-8-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot80OldSchoolServerKeywordPage />;
}
