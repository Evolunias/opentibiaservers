import Alastera71OldSchoolServerKeywordPage, { generateMetadata } from './alastera-7-1-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera71OldSchoolServerKeywordPage />;
}
