import NonPvpWikiArgentinaKeywordPage, { generateMetadata } from './non-pvp-wiki-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpWikiArgentinaKeywordPage />;
}
