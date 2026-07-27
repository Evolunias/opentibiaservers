import LowrateTibiaraWikiKeywordPage, { generateMetadata } from './lowrate-tibiara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaraWikiKeywordPage />;
}
