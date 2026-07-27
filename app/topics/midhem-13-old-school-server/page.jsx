import Midhem13OldSchoolServerKeywordPage, { generateMetadata } from './midhem-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem13OldSchoolServerKeywordPage />;
}
