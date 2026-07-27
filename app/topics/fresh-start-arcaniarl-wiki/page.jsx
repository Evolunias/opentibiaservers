import FreshStartArcaniarlWikiKeywordPage, { generateMetadata } from './fresh-start-arcaniarl-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartArcaniarlWikiKeywordPage />;
}
