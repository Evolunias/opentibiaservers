import CurrentTibiascapeWikiKeywordPage, { generateMetadata } from './current-tibiascape-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiascapeWikiKeywordPage />;
}
