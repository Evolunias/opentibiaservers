import Tibiantis11OldSchoolServerKeywordPage, { generateMetadata } from './tibiantis-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis11OldSchoolServerKeywordPage />;
}
