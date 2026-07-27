import HighrateTibiaraWikiKeywordPage, { generateMetadata } from './highrate-tibiara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaraWikiKeywordPage />;
}
