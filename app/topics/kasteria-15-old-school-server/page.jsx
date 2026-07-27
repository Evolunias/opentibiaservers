import Kasteria15OldSchoolServerKeywordPage, { generateMetadata } from './kasteria-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria15OldSchoolServerKeywordPage />;
}
