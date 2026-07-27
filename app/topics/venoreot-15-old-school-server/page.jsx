import Venoreot15OldSchoolServerKeywordPage, { generateMetadata } from './venoreot-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot15OldSchoolServerKeywordPage />;
}
