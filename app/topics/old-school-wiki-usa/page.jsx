import OldSchoolWikiUsaKeywordPage, { generateMetadata } from './old-school-wiki-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolWikiUsaKeywordPage />;
}
