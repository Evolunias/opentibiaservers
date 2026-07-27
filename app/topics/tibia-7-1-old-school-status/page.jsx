import Tibia71OldSchoolStatusKeywordPage, { generateMetadata } from './tibia-7-1-old-school-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71OldSchoolStatusKeywordPage />;
}
