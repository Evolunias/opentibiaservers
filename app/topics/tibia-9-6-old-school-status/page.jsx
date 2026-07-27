import Tibia96OldSchoolStatusKeywordPage, { generateMetadata } from './tibia-9-6-old-school-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96OldSchoolStatusKeywordPage />;
}
