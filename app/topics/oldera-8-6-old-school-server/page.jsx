import Oldera86OldSchoolServerKeywordPage, { generateMetadata } from './oldera-8-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera86OldSchoolServerKeywordPage />;
}
