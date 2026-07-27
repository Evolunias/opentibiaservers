import Venoreot96OldSchoolServerKeywordPage, { generateMetadata } from './venoreot-9-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot96OldSchoolServerKeywordPage />;
}
