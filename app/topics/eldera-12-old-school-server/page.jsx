import Eldera12OldSchoolServerKeywordPage, { generateMetadata } from './eldera-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera12OldSchoolServerKeywordPage />;
}
