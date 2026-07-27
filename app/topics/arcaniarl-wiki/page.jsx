import ArcaniarlWikiKeywordPage, { generateMetadata } from './arcaniarl-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlWikiKeywordPage />;
}
