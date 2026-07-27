import OldSchoolClientArgentinaKeywordPage, { generateMetadata } from './old-school-client-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClientArgentinaKeywordPage />;
}
