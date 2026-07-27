import Saintsot12OldSchoolServerKeywordPage, { generateMetadata } from './saintsot-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot12OldSchoolServerKeywordPage />;
}
