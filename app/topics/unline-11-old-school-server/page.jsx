import Unline11OldSchoolServerKeywordPage, { generateMetadata } from './unline-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline11OldSchoolServerKeywordPage />;
}
