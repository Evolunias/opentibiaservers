import Tibia15OldSchoolStatusKeywordPage, { generateMetadata } from './tibia-15-old-school-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15OldSchoolStatusKeywordPage />;
}
