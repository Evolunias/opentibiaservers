import Tibiantis15OldSchoolServerKeywordPage, { generateMetadata } from './tibiantis-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis15OldSchoolServerKeywordPage />;
}
