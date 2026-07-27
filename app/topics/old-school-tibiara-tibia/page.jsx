import OldSchoolTibiaraTibiaKeywordPage, { generateMetadata } from './old-school-tibiara-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaraTibiaKeywordPage />;
}
