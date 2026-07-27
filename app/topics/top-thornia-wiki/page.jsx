import TopThorniaWikiKeywordPage, { generateMetadata } from './top-thornia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThorniaWikiKeywordPage />;
}
