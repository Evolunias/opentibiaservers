import Tibia100OldSchoolStatusKeywordPage, { generateMetadata } from './tibia-10-0-old-school-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100OldSchoolStatusKeywordPage />;
}
