import OldSchoolImperianicOpenTibiaKeywordPage, { generateMetadata } from './old-school-imperianic-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolImperianicOpenTibiaKeywordPage />;
}
