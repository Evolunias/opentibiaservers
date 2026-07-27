import ActiveArcaniarlWikiKeywordPage, { generateMetadata } from './active-arcaniarl-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArcaniarlWikiKeywordPage />;
}
