import Alastera81OldSchoolServerKeywordPage, { generateMetadata } from './alastera-8-1-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera81OldSchoolServerKeywordPage />;
}
