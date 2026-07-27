import OldSchoolNilotTibiaKeywordPage, { generateMetadata } from './old-school-nilot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNilotTibiaKeywordPage />;
}
