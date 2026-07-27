import Realesta11OldSchoolServerKeywordPage, { generateMetadata } from './realesta-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta11OldSchoolServerKeywordPage />;
}
