import RetroWikiUsaKeywordPage, { generateMetadata } from './retro-wiki-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroWikiUsaKeywordPage />;
}
