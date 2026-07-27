import TopXanteriaWikiKeywordPage, { generateMetadata } from './top-xanteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopXanteriaWikiKeywordPage />;
}
