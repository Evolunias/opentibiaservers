import RetroWikiSwedenKeywordPage, { generateMetadata } from './retro-wiki-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroWikiSwedenKeywordPage />;
}
