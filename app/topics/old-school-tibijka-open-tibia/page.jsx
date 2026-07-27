import OldSchoolTibijkaOpenTibiaKeywordPage, { generateMetadata } from './old-school-tibijka-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibijkaOpenTibiaKeywordPage />;
}
