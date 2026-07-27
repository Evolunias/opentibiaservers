import Classicus15OldSchoolServerKeywordPage, { generateMetadata } from './classicus-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus15OldSchoolServerKeywordPage />;
}
