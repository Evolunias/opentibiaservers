import FreshStartNilotWikiKeywordPage, { generateMetadata } from './fresh-start-nilot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNilotWikiKeywordPage />;
}
