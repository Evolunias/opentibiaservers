import OldSchoolClassickDrakoriaOtKeywordPage, { generateMetadata } from './old-school-classick-drakoria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassickDrakoriaOtKeywordPage />;
}
