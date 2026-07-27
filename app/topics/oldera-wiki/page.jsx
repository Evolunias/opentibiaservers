import OlderaWikiKeywordPage, { generateMetadata } from './oldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaWikiKeywordPage />;
}
