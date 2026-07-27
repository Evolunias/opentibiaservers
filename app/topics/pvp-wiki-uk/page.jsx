import PvpWikiUkKeywordPage, { generateMetadata } from './pvp-wiki-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpWikiUkKeywordPage />;
}
