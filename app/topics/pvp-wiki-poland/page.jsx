import PvpWikiPolandKeywordPage, { generateMetadata } from './pvp-wiki-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpWikiPolandKeywordPage />;
}
