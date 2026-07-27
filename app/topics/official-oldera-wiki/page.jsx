import OfficialOlderaWikiKeywordPage, { generateMetadata } from './official-oldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOlderaWikiKeywordPage />;
}
