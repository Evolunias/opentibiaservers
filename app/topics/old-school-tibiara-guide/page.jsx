import OldSchoolTibiaraGuideKeywordPage, { generateMetadata } from './old-school-tibiara-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaraGuideKeywordPage />;
}
