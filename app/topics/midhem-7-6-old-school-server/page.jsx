import Midhem76OldSchoolServerKeywordPage, { generateMetadata } from './midhem-7-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem76OldSchoolServerKeywordPage />;
}
