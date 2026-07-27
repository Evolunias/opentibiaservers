import TopDemolidoresWikiKeywordPage, { generateMetadata } from './top-demolidores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopDemolidoresWikiKeywordPage />;
}
