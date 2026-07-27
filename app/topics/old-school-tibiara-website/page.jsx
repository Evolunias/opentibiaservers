import OldSchoolTibiaraWebsiteKeywordPage, { generateMetadata } from './old-school-tibiara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaraWebsiteKeywordPage />;
}
