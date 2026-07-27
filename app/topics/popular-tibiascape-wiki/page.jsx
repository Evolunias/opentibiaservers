import PopularTibiascapeWikiKeywordPage, { generateMetadata } from './popular-tibiascape-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiascapeWikiKeywordPage />;
}
