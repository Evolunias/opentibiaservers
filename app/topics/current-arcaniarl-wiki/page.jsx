import CurrentArcaniarlWikiKeywordPage, { generateMetadata } from './current-arcaniarl-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArcaniarlWikiKeywordPage />;
}
