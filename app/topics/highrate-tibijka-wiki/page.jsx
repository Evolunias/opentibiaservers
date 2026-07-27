import HighrateTibijkaWikiKeywordPage, { generateMetadata } from './highrate-tibijka-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibijkaWikiKeywordPage />;
}
