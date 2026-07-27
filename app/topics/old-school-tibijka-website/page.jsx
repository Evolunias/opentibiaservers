import OldSchoolTibijkaWebsiteKeywordPage, { generateMetadata } from './old-school-tibijka-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibijkaWebsiteKeywordPage />;
}
