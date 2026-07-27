import OldSchoolClassickDrakoriaKeywordPage, { generateMetadata } from './old-school-classick-drakoria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassickDrakoriaKeywordPage />;
}
