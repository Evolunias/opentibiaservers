import OldSchoolXanteriaWikiKeywordPage, { generateMetadata } from './old-school-xanteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolXanteriaWikiKeywordPage />;
}
