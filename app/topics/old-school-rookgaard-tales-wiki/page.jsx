import OldSchoolRookgaardTalesWikiKeywordPage, { generateMetadata } from './old-school-rookgaard-tales-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRookgaardTalesWikiKeywordPage />;
}
