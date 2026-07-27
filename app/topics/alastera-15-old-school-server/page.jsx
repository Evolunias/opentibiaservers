import Alastera15OldSchoolServerKeywordPage, { generateMetadata } from './alastera-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera15OldSchoolServerKeywordPage />;
}
