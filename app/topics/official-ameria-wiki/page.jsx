import OfficialAmeriaWikiKeywordPage, { generateMetadata } from './official-ameria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAmeriaWikiKeywordPage />;
}
