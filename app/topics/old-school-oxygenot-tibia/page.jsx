import OldSchoolOxygenotTibiaKeywordPage, { generateMetadata } from './old-school-oxygenot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOxygenotTibiaKeywordPage />;
}
