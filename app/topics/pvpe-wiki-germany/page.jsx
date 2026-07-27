import PvpeWikiGermanyKeywordPage, { generateMetadata } from './pvpe-wiki-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeWikiGermanyKeywordPage />;
}
