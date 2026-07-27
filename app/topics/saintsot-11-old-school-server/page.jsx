import Saintsot11OldSchoolServerKeywordPage, { generateMetadata } from './saintsot-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot11OldSchoolServerKeywordPage />;
}
