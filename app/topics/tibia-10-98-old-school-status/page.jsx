import Tibia1098OldSchoolStatusKeywordPage, { generateMetadata } from './tibia-10-98-old-school-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098OldSchoolStatusKeywordPage />;
}
