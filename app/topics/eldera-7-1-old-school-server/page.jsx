import Eldera71OldSchoolServerKeywordPage, { generateMetadata } from './eldera-7-1-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera71OldSchoolServerKeywordPage />;
}
