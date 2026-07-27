import Tibia14OldSchoolStatusKeywordPage, { generateMetadata } from './tibia-14-old-school-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14OldSchoolStatusKeywordPage />;
}
