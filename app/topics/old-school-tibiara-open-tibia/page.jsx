import OldSchoolTibiaraOpenTibiaKeywordPage, { generateMetadata } from './old-school-tibiara-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaraOpenTibiaKeywordPage />;
}
