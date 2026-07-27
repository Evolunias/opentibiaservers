import Venoreot14OldSchoolServerKeywordPage, { generateMetadata } from './venoreot-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot14OldSchoolServerKeywordPage />;
}
