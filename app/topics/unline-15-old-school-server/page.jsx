import Unline15OldSchoolServerKeywordPage, { generateMetadata } from './unline-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline15OldSchoolServerKeywordPage />;
}
