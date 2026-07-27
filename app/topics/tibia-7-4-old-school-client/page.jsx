import Tibia74OldSchoolClientKeywordPage, { generateMetadata } from './tibia-7-4-old-school-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74OldSchoolClientKeywordPage />;
}
