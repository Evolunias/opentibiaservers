import KasteriaSpellsKeywordPage, { generateMetadata } from './kasteria-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaSpellsKeywordPage />;
}
