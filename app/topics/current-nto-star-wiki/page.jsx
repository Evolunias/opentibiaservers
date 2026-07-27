import CurrentNtoStarWikiKeywordPage, { generateMetadata } from './current-nto-star-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNtoStarWikiKeywordPage />;
}
