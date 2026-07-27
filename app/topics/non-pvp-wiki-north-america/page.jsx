import NonPvpWikiNorthAmericaKeywordPage, { generateMetadata } from './non-pvp-wiki-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpWikiNorthAmericaKeywordPage />;
}
