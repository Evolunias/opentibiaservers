import Alastera86OldSchoolServerKeywordPage, { generateMetadata } from './alastera-8-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera86OldSchoolServerKeywordPage />;
}
