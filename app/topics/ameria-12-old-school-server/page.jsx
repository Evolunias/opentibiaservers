import Ameria12OldSchoolServerKeywordPage, { generateMetadata } from './ameria-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria12OldSchoolServerKeywordPage />;
}
