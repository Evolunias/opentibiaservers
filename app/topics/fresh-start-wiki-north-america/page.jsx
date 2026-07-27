import FreshStartWikiNorthAmericaKeywordPage, { generateMetadata } from './fresh-start-wiki-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartWikiNorthAmericaKeywordPage />;
}
