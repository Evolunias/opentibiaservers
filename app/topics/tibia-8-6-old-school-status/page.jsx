import Tibia86OldSchoolStatusKeywordPage, { generateMetadata } from './tibia-8-6-old-school-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86OldSchoolStatusKeywordPage />;
}
