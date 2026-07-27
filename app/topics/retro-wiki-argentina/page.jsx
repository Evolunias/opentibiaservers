import RetroWikiArgentinaKeywordPage, { generateMetadata } from './retro-wiki-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroWikiArgentinaKeywordPage />;
}
