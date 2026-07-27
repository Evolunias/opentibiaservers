import Kasteria12OldSchoolServerKeywordPage, { generateMetadata } from './kasteria-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria12OldSchoolServerKeywordPage />;
}
