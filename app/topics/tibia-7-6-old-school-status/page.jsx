import Tibia76OldSchoolStatusKeywordPage, { generateMetadata } from './tibia-7-6-old-school-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76OldSchoolStatusKeywordPage />;
}
