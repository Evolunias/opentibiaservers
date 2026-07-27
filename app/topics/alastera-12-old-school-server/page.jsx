import Alastera12OldSchoolServerKeywordPage, { generateMetadata } from './alastera-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera12OldSchoolServerKeywordPage />;
}
