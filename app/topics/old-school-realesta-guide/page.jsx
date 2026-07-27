import OldSchoolRealestaGuideKeywordPage, { generateMetadata } from './old-school-realesta-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealestaGuideKeywordPage />;
}
