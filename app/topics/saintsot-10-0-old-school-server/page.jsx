import Saintsot100OldSchoolServerKeywordPage, { generateMetadata } from './saintsot-10-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot100OldSchoolServerKeywordPage />;
}
