import OldSchoolThorniaWebsiteKeywordPage, { generateMetadata } from './old-school-thornia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThorniaWebsiteKeywordPage />;
}
