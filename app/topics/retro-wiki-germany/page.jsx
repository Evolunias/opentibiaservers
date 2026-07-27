import RetroWikiGermanyKeywordPage, { generateMetadata } from './retro-wiki-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroWikiGermanyKeywordPage />;
}
