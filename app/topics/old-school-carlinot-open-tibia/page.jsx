import OldSchoolCarlinotOpenTibiaKeywordPage, { generateMetadata } from './old-school-carlinot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCarlinotOpenTibiaKeywordPage />;
}
