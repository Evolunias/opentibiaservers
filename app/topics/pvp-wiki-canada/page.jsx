import PvpWikiCanadaKeywordPage, { generateMetadata } from './pvp-wiki-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpWikiCanadaKeywordPage />;
}
