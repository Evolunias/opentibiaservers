import Eldera96OldSchoolServerKeywordPage, { generateMetadata } from './eldera-9-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera96OldSchoolServerKeywordPage />;
}
