import OldSchoolTibijkaGuideKeywordPage, { generateMetadata } from './old-school-tibijka-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibijkaGuideKeywordPage />;
}
