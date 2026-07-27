import OldSchoolCarlinotClientKeywordPage, { generateMetadata } from './old-school-carlinot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCarlinotClientKeywordPage />;
}
