import OldSchoolCarlinotServerKeywordPage, { generateMetadata } from './old-school-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCarlinotServerKeywordPage />;
}
