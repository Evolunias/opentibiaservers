import OldSchoolNilotOpenTibiaKeywordPage, { generateMetadata } from './old-school-nilot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNilotOpenTibiaKeywordPage />;
}
