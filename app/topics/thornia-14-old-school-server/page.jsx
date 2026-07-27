import Thornia14OldSchoolServerKeywordPage, { generateMetadata } from './thornia-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia14OldSchoolServerKeywordPage />;
}
