import Eldera15OldSchoolServerKeywordPage, { generateMetadata } from './eldera-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera15OldSchoolServerKeywordPage />;
}
