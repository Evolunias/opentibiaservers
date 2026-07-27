import Evolera11OldSchoolServerKeywordPage, { generateMetadata } from './evolera-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera11OldSchoolServerKeywordPage />;
}
