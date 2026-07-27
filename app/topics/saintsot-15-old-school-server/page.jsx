import Saintsot15OldSchoolServerKeywordPage, { generateMetadata } from './saintsot-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot15OldSchoolServerKeywordPage />;
}
