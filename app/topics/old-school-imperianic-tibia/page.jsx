import OldSchoolImperianicTibiaKeywordPage, { generateMetadata } from './old-school-imperianic-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolImperianicTibiaKeywordPage />;
}
