import NewArcaniarlWikiKeywordPage, { generateMetadata } from './new-arcaniarl-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewArcaniarlWikiKeywordPage />;
}
