import Tibia13OldSchoolStatusKeywordPage, { generateMetadata } from './tibia-13-old-school-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13OldSchoolStatusKeywordPage />;
}
