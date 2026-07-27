import Eldera80OldSchoolServerKeywordPage, { generateMetadata } from './eldera-8-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera80OldSchoolServerKeywordPage />;
}
