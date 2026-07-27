import Midhem100OldSchoolServerKeywordPage, { generateMetadata } from './midhem-10-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem100OldSchoolServerKeywordPage />;
}
