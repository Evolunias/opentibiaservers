import OldSchoolSerenityTibiaKeywordPage, { generateMetadata } from './old-school-serenity-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSerenityTibiaKeywordPage />;
}
