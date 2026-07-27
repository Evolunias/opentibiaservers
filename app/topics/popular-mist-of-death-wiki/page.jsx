import PopularMistOfDeathWikiKeywordPage, { generateMetadata } from './popular-mist-of-death-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMistOfDeathWikiKeywordPage />;
}
