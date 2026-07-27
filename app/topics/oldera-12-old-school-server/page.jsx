import Oldera12OldSchoolServerKeywordPage, { generateMetadata } from './oldera-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera12OldSchoolServerKeywordPage />;
}
