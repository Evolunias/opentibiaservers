import Alastera11OldSchoolServerKeywordPage, { generateMetadata } from './alastera-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera11OldSchoolServerKeywordPage />;
}
