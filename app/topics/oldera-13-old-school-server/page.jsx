import Oldera13OldSchoolServerKeywordPage, { generateMetadata } from './oldera-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera13OldSchoolServerKeywordPage />;
}
