import OldSchoolCarlinotGuideKeywordPage, { generateMetadata } from './old-school-carlinot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCarlinotGuideKeywordPage />;
}
