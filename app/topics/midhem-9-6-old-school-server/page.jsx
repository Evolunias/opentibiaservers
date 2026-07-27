import Midhem96OldSchoolServerKeywordPage, { generateMetadata } from './midhem-9-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem96OldSchoolServerKeywordPage />;
}
