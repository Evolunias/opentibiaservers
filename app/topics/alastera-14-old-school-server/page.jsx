import Alastera14OldSchoolServerKeywordPage, { generateMetadata } from './alastera-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera14OldSchoolServerKeywordPage />;
}
