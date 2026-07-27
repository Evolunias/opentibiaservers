import Thornia13OldSchoolServerKeywordPage, { generateMetadata } from './thornia-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia13OldSchoolServerKeywordPage />;
}
