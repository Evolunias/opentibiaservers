import Thornia74OldSchoolServerKeywordPage, { generateMetadata } from './thornia-7-4-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia74OldSchoolServerKeywordPage />;
}
