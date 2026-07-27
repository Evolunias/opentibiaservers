import Kasteria11OldSchoolServerKeywordPage, { generateMetadata } from './kasteria-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria11OldSchoolServerKeywordPage />;
}
