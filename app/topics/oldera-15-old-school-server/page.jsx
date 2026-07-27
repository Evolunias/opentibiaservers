import Oldera15OldSchoolServerKeywordPage, { generateMetadata } from './oldera-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera15OldSchoolServerKeywordPage />;
}
