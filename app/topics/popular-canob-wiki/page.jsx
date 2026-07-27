import PopularCanobWikiKeywordPage, { generateMetadata } from './popular-canob-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCanobWikiKeywordPage />;
}
