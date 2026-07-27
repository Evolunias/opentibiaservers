import Tibia11OldSchoolStatusKeywordPage, { generateMetadata } from './tibia-11-old-school-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11OldSchoolStatusKeywordPage />;
}
