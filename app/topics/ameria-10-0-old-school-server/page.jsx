import Ameria100OldSchoolServerKeywordPage, { generateMetadata } from './ameria-10-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria100OldSchoolServerKeywordPage />;
}
