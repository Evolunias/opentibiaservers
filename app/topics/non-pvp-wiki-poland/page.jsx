import NonPvpWikiPolandKeywordPage, { generateMetadata } from './non-pvp-wiki-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpWikiPolandKeywordPage />;
}
