import CurrentXanteriaWikiKeywordPage, { generateMetadata } from './current-xanteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentXanteriaWikiKeywordPage />;
}
