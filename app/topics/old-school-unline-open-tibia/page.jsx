import OldSchoolUnlineOpenTibiaKeywordPage, { generateMetadata } from './old-school-unline-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolUnlineOpenTibiaKeywordPage />;
}
