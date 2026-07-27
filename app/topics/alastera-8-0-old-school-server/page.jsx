import Alastera80OldSchoolServerKeywordPage, { generateMetadata } from './alastera-8-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera80OldSchoolServerKeywordPage />;
}
