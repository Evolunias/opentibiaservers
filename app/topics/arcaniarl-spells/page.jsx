import ArcaniarlSpellsKeywordPage, { generateMetadata } from './arcaniarl-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlSpellsKeywordPage />;
}
