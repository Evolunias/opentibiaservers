import OldSchoolCarlinotOtsKeywordPage, { generateMetadata } from './old-school-carlinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCarlinotOtsKeywordPage />;
}
