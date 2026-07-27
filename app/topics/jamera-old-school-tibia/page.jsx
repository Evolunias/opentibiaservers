import JameraOldSchoolTibiaKeywordPage, { generateMetadata } from './jamera-old-school-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JameraOldSchoolTibiaKeywordPage />;
}
