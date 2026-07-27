import Oldera96OldSchoolServerKeywordPage, { generateMetadata } from './oldera-9-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera96OldSchoolServerKeywordPage />;
}
