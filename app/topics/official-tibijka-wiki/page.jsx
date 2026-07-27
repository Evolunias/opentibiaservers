import OfficialTibijkaWikiKeywordPage, { generateMetadata } from './official-tibijka-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibijkaWikiKeywordPage />;
}
