import TopClassicusWikiKeywordPage, { generateMetadata } from './top-classicus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassicusWikiKeywordPage />;
}
