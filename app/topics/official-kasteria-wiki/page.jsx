import OfficialKasteriaWikiKeywordPage, { generateMetadata } from './official-kasteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialKasteriaWikiKeywordPage />;
}
