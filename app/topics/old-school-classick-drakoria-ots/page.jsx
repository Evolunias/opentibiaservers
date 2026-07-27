import OldSchoolClassickDrakoriaOtsKeywordPage, { generateMetadata } from './old-school-classick-drakoria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassickDrakoriaOtsKeywordPage />;
}
