import Unline13OldSchoolServerKeywordPage, { generateMetadata } from './unline-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline13OldSchoolServerKeywordPage />;
}
