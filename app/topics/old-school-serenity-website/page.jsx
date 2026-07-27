import OldSchoolSerenityWebsiteKeywordPage, { generateMetadata } from './old-school-serenity-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSerenityWebsiteKeywordPage />;
}
