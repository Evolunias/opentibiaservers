import OldSchoolThaisotTibiaKeywordPage, { generateMetadata } from './old-school-thaisot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThaisotTibiaKeywordPage />;
}
