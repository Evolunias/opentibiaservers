import OldSchoolThaisotOpenTibiaKeywordPage, { generateMetadata } from './old-school-thaisot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThaisotOpenTibiaKeywordPage />;
}
