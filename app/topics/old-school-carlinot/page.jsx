import OldSchoolCarlinotKeywordPage, { generateMetadata } from './old-school-carlinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCarlinotKeywordPage />;
}
