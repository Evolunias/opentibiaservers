import Tibia12OldSchoolStatusKeywordPage, { generateMetadata } from './tibia-12-old-school-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12OldSchoolStatusKeywordPage />;
}
