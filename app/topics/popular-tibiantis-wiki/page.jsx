import PopularTibiantisWikiKeywordPage, { generateMetadata } from './popular-tibiantis-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiantisWikiKeywordPage />;
}
