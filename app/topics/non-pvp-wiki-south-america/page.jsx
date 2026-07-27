import NonPvpWikiSouthAmericaKeywordPage, { generateMetadata } from './non-pvp-wiki-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpWikiSouthAmericaKeywordPage />;
}
