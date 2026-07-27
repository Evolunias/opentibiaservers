import PvpeWikiLatinAmericaKeywordPage, { generateMetadata } from './pvpe-wiki-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeWikiLatinAmericaKeywordPage />;
}
