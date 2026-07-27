import OldSchoolCarlinotLoginKeywordPage, { generateMetadata } from './old-school-carlinot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCarlinotLoginKeywordPage />;
}
