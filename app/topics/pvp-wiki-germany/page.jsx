import PvpWikiGermanyKeywordPage, { generateMetadata } from './pvp-wiki-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpWikiGermanyKeywordPage />;
}
