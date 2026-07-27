import Tibia1098OldSchoolServerKeywordPage, { generateMetadata } from './tibia-10-98-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098OldSchoolServerKeywordPage />;
}
