import PopularOlderaWikiKeywordPage, { generateMetadata } from './popular-oldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOlderaWikiKeywordPage />;
}
