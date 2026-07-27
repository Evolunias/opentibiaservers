import Kasteria71OldSchoolServerKeywordPage, { generateMetadata } from './kasteria-7-1-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria71OldSchoolServerKeywordPage />;
}
