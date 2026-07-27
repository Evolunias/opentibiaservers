import FreshStartYurotsWikiKeywordPage, { generateMetadata } from './fresh-start-yurots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartYurotsWikiKeywordPage />;
}
