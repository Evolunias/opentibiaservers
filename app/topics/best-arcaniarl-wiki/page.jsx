import BestArcaniarlWikiKeywordPage, { generateMetadata } from './best-arcaniarl-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArcaniarlWikiKeywordPage />;
}
