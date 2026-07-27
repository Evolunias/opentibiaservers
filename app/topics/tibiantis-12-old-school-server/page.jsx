import Tibiantis12OldSchoolServerKeywordPage, { generateMetadata } from './tibiantis-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis12OldSchoolServerKeywordPage />;
}
