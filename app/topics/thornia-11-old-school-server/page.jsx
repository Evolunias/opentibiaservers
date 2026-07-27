import Thornia11OldSchoolServerKeywordPage, { generateMetadata } from './thornia-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia11OldSchoolServerKeywordPage />;
}
