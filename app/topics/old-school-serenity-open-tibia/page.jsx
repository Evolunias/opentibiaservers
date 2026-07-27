import OldSchoolSerenityOpenTibiaKeywordPage, { generateMetadata } from './old-school-serenity-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSerenityOpenTibiaKeywordPage />;
}
