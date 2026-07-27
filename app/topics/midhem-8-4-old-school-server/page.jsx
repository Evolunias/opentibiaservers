import Midhem84OldSchoolServerKeywordPage, { generateMetadata } from './midhem-8-4-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem84OldSchoolServerKeywordPage />;
}
