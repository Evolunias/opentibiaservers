import Tibia772OldSchoolStatusKeywordPage, { generateMetadata } from './tibia-7-72-old-school-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772OldSchoolStatusKeywordPage />;
}
