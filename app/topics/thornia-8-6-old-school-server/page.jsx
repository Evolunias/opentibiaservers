import Thornia86OldSchoolServerKeywordPage, { generateMetadata } from './thornia-8-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia86OldSchoolServerKeywordPage />;
}
