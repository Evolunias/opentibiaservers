import OldSchoolThorniaGuideKeywordPage, { generateMetadata } from './old-school-thornia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThorniaGuideKeywordPage />;
}
