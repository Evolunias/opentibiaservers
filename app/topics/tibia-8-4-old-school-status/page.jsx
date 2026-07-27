import Tibia84OldSchoolStatusKeywordPage, { generateMetadata } from './tibia-8-4-old-school-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84OldSchoolStatusKeywordPage />;
}
