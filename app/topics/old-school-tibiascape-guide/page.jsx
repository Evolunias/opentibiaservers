import OldSchoolTibiascapeGuideKeywordPage, { generateMetadata } from './old-school-tibiascape-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiascapeGuideKeywordPage />;
}
