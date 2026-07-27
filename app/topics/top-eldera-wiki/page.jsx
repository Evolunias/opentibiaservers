import TopElderaWikiKeywordPage, { generateMetadata } from './top-eldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopElderaWikiKeywordPage />;
}
