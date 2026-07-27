import Tibia86OldSchoolClientKeywordPage, { generateMetadata } from './tibia-8-6-old-school-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86OldSchoolClientKeywordPage />;
}
