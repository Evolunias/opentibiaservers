import Tibia81OldSchoolClientKeywordPage, { generateMetadata } from './tibia-8-1-old-school-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81OldSchoolClientKeywordPage />;
}
