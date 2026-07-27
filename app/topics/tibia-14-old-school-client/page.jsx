import Tibia14OldSchoolClientKeywordPage, { generateMetadata } from './tibia-14-old-school-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14OldSchoolClientKeywordPage />;
}
