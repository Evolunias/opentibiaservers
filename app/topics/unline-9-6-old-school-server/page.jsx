import Unline96OldSchoolServerKeywordPage, { generateMetadata } from './unline-9-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline96OldSchoolServerKeywordPage />;
}
