import Midhem1098OldSchoolServerKeywordPage, { generateMetadata } from './midhem-10-98-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem1098OldSchoolServerKeywordPage />;
}
