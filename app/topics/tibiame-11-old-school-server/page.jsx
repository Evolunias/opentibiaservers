import Tibiame11OldSchoolServerKeywordPage, { generateMetadata } from './tibiame-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame11OldSchoolServerKeywordPage />;
}
