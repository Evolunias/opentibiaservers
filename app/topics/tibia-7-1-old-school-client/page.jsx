import Tibia71OldSchoolClientKeywordPage, { generateMetadata } from './tibia-7-1-old-school-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71OldSchoolClientKeywordPage />;
}
