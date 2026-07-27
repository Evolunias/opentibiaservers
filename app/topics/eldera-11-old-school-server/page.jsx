import Eldera11OldSchoolServerKeywordPage, { generateMetadata } from './eldera-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera11OldSchoolServerKeywordPage />;
}
