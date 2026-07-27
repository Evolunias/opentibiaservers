import Tibia15OldSchoolClientKeywordPage, { generateMetadata } from './tibia-15-old-school-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15OldSchoolClientKeywordPage />;
}
