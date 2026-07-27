import NonPvpWikiEuropeKeywordPage, { generateMetadata } from './non-pvp-wiki-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpWikiEuropeKeywordPage />;
}
