import Ameria13OldSchoolServerKeywordPage, { generateMetadata } from './ameria-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria13OldSchoolServerKeywordPage />;
}
