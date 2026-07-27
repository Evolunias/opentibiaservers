import Midhem12OldSchoolServerKeywordPage, { generateMetadata } from './midhem-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem12OldSchoolServerKeywordPage />;
}
