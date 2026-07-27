import FreshStartTibijkaWikiKeywordPage, { generateMetadata } from './fresh-start-tibijka-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibijkaWikiKeywordPage />;
}
