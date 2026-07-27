import Thornia12OldSchoolServerKeywordPage, { generateMetadata } from './thornia-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia12OldSchoolServerKeywordPage />;
}
