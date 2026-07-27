import PvpeWikiEuropeKeywordPage, { generateMetadata } from './pvpe-wiki-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeWikiEuropeKeywordPage />;
}
