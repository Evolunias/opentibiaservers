import Tibiantis13OldSchoolServerKeywordPage, { generateMetadata } from './tibiantis-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis13OldSchoolServerKeywordPage />;
}
