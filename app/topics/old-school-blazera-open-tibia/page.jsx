import OldSchoolBlazeraOpenTibiaKeywordPage, { generateMetadata } from './old-school-blazera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBlazeraOpenTibiaKeywordPage />;
}
