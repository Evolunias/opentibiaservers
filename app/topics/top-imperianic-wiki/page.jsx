import TopImperianicWikiKeywordPage, { generateMetadata } from './top-imperianic-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopImperianicWikiKeywordPage />;
}
