import FreshStartWikiUsaKeywordPage, { generateMetadata } from './fresh-start-wiki-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartWikiUsaKeywordPage />;
}
