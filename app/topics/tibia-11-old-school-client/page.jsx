import Tibia11OldSchoolClientKeywordPage, { generateMetadata } from './tibia-11-old-school-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11OldSchoolClientKeywordPage />;
}
