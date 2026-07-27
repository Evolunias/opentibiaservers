import PvpeWikiArgentinaKeywordPage, { generateMetadata } from './pvpe-wiki-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeWikiArgentinaKeywordPage />;
}
