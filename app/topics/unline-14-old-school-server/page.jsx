import Unline14OldSchoolServerKeywordPage, { generateMetadata } from './unline-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline14OldSchoolServerKeywordPage />;
}
