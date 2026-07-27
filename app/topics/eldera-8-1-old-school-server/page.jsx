import Eldera81OldSchoolServerKeywordPage, { generateMetadata } from './eldera-8-1-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera81OldSchoolServerKeywordPage />;
}
