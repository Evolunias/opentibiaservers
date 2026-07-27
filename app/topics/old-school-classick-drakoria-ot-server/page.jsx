import OldSchoolClassickDrakoriaOtServerKeywordPage, { generateMetadata } from './old-school-classick-drakoria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassickDrakoriaOtServerKeywordPage />;
}
