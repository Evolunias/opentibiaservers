import OldSchoolCarlinotOfficialKeywordPage, { generateMetadata } from './old-school-carlinot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCarlinotOfficialKeywordPage />;
}
