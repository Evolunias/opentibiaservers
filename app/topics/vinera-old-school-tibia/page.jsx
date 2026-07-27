import VineraOldSchoolTibiaKeywordPage, { generateMetadata } from './vinera-old-school-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VineraOldSchoolTibiaKeywordPage />;
}
