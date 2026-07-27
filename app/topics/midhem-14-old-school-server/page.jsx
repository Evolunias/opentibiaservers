import Midhem14OldSchoolServerKeywordPage, { generateMetadata } from './midhem-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem14OldSchoolServerKeywordPage />;
}
