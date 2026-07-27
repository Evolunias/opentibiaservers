import Saintsot13OldSchoolServerKeywordPage, { generateMetadata } from './saintsot-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot13OldSchoolServerKeywordPage />;
}
