import Ameria15OldSchoolServerKeywordPage, { generateMetadata } from './ameria-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria15OldSchoolServerKeywordPage />;
}
