import PopularClassicusWikiKeywordPage, { generateMetadata } from './popular-classicus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularClassicusWikiKeywordPage />;
}
