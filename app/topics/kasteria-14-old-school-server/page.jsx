import Kasteria14OldSchoolServerKeywordPage, { generateMetadata } from './kasteria-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria14OldSchoolServerKeywordPage />;
}
