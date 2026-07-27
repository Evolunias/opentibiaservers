import Venoreot13OldSchoolServerKeywordPage, { generateMetadata } from './venoreot-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot13OldSchoolServerKeywordPage />;
}
