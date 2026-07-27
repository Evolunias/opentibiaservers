import PvpWikiUsaKeywordPage, { generateMetadata } from './pvp-wiki-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpWikiUsaKeywordPage />;
}
