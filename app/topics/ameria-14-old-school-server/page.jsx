import Ameria14OldSchoolServerKeywordPage, { generateMetadata } from './ameria-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria14OldSchoolServerKeywordPage />;
}
