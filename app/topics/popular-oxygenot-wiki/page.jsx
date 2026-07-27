import PopularOxygenotWikiKeywordPage, { generateMetadata } from './popular-oxygenot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOxygenotWikiKeywordPage />;
}
