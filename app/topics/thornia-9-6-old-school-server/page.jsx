import Thornia96OldSchoolServerKeywordPage, { generateMetadata } from './thornia-9-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia96OldSchoolServerKeywordPage />;
}
