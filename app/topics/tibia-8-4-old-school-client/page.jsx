import Tibia84OldSchoolClientKeywordPage, { generateMetadata } from './tibia-8-4-old-school-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84OldSchoolClientKeywordPage />;
}
