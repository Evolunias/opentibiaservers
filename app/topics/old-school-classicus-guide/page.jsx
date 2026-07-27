import OldSchoolClassicusGuideKeywordPage, { generateMetadata } from './old-school-classicus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassicusGuideKeywordPage />;
}
