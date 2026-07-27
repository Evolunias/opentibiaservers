import Thornia80OldSchoolServerKeywordPage, { generateMetadata } from './thornia-8-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia80OldSchoolServerKeywordPage />;
}
