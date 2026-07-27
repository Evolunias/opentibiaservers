import Venoreot11OldSchoolServerKeywordPage, { generateMetadata } from './venoreot-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot11OldSchoolServerKeywordPage />;
}
