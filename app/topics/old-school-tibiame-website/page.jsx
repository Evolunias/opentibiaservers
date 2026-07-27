import OldSchoolTibiameWebsiteKeywordPage, { generateMetadata } from './old-school-tibiame-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiameWebsiteKeywordPage />;
}
