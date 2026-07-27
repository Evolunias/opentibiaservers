import Tibia854OldSchoolStatusKeywordPage, { generateMetadata } from './tibia-8-54-old-school-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854OldSchoolStatusKeywordPage />;
}
