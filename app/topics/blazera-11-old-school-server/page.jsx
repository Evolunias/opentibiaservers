import Blazera11OldSchoolServerKeywordPage, { generateMetadata } from './blazera-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera11OldSchoolServerKeywordPage />;
}
