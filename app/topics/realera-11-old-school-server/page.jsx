import Realera11OldSchoolServerKeywordPage, { generateMetadata } from './realera-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera11OldSchoolServerKeywordPage />;
}
