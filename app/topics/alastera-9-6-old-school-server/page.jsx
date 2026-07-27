import Alastera96OldSchoolServerKeywordPage, { generateMetadata } from './alastera-9-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera96OldSchoolServerKeywordPage />;
}
