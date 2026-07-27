import PvpWikiSouthAmericaKeywordPage, { generateMetadata } from './pvp-wiki-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpWikiSouthAmericaKeywordPage />;
}
