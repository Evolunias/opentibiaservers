import Tibia12OldSchoolClientKeywordPage, { generateMetadata } from './tibia-12-old-school-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12OldSchoolClientKeywordPage />;
}
