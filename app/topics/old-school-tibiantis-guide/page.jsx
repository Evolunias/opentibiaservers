import OldSchoolTibiantisGuideKeywordPage, { generateMetadata } from './old-school-tibiantis-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiantisGuideKeywordPage />;
}
