import Tibia13OldSchoolClientKeywordPage, { generateMetadata } from './tibia-13-old-school-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13OldSchoolClientKeywordPage />;
}
