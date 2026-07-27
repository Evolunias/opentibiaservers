import PopularTibijkaWikiKeywordPage, { generateMetadata } from './popular-tibijka-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibijkaWikiKeywordPage />;
}
