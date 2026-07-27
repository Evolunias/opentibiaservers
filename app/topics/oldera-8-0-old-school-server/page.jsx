import Oldera80OldSchoolServerKeywordPage, { generateMetadata } from './oldera-8-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera80OldSchoolServerKeywordPage />;
}
