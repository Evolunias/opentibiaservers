import Thornia15OldSchoolServerKeywordPage, { generateMetadata } from './thornia-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia15OldSchoolServerKeywordPage />;
}
