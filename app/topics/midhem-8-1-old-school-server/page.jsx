import Midhem81OldSchoolServerKeywordPage, { generateMetadata } from './midhem-8-1-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem81OldSchoolServerKeywordPage />;
}
