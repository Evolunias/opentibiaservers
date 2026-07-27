import Kasteria86OldSchoolServerKeywordPage, { generateMetadata } from './kasteria-8-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria86OldSchoolServerKeywordPage />;
}
