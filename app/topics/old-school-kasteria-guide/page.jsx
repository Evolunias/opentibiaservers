import OldSchoolKasteriaGuideKeywordPage, { generateMetadata } from './old-school-kasteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolKasteriaGuideKeywordPage />;
}
