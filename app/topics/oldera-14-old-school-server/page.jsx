import Oldera14OldSchoolServerKeywordPage, { generateMetadata } from './oldera-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera14OldSchoolServerKeywordPage />;
}
