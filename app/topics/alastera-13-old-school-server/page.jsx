import Alastera13OldSchoolServerKeywordPage, { generateMetadata } from './alastera-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera13OldSchoolServerKeywordPage />;
}
