import NonPvpWikiSwedenKeywordPage, { generateMetadata } from './non-pvp-wiki-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpWikiSwedenKeywordPage />;
}
