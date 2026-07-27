import Venoreot12OldSchoolServerKeywordPage, { generateMetadata } from './venoreot-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot12OldSchoolServerKeywordPage />;
}
