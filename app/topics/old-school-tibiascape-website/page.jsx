import OldSchoolTibiascapeWebsiteKeywordPage, { generateMetadata } from './old-school-tibiascape-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiascapeWebsiteKeywordPage />;
}
