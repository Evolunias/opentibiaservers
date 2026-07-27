import FreshStartTibiaraWikiKeywordPage, { generateMetadata } from './fresh-start-tibiara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiaraWikiKeywordPage />;
}
