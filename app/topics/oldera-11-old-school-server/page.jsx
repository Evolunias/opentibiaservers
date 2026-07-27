import Oldera11OldSchoolServerKeywordPage, { generateMetadata } from './oldera-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera11OldSchoolServerKeywordPage />;
}
