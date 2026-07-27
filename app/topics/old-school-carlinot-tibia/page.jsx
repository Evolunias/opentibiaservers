import OldSchoolCarlinotTibiaKeywordPage, { generateMetadata } from './old-school-carlinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCarlinotTibiaKeywordPage />;
}
