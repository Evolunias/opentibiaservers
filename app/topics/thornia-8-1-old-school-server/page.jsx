import Thornia81OldSchoolServerKeywordPage, { generateMetadata } from './thornia-8-1-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia81OldSchoolServerKeywordPage />;
}
