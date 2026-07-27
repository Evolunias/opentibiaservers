import Eldera13OldSchoolServerKeywordPage, { generateMetadata } from './eldera-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera13OldSchoolServerKeywordPage />;
}
