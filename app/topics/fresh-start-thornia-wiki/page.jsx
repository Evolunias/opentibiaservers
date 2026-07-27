import FreshStartThorniaWikiKeywordPage, { generateMetadata } from './fresh-start-thornia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThorniaWikiKeywordPage />;
}
