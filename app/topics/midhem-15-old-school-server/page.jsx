import Midhem15OldSchoolServerKeywordPage, { generateMetadata } from './midhem-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem15OldSchoolServerKeywordPage />;
}
