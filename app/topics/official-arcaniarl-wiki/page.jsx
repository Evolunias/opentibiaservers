import OfficialArcaniarlWikiKeywordPage, { generateMetadata } from './official-arcaniarl-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArcaniarlWikiKeywordPage />;
}
