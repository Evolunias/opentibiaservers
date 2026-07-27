import Midhem86OldSchoolServerKeywordPage, { generateMetadata } from './midhem-8-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem86OldSchoolServerKeywordPage />;
}
