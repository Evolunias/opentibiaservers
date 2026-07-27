import PvpeWikiCanadaKeywordPage, { generateMetadata } from './pvpe-wiki-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeWikiCanadaKeywordPage />;
}
