import Thornia100OldSchoolServerKeywordPage, { generateMetadata } from './thornia-10-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia100OldSchoolServerKeywordPage />;
}
