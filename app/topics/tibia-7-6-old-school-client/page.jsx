import Tibia76OldSchoolClientKeywordPage, { generateMetadata } from './tibia-7-6-old-school-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76OldSchoolClientKeywordPage />;
}
