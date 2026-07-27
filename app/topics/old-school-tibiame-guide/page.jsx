import OldSchoolTibiameGuideKeywordPage, { generateMetadata } from './old-school-tibiame-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiameGuideKeywordPage />;
}
