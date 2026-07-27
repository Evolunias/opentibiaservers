import RookgaardTalesSpellsKeywordPage, { generateMetadata } from './rookgaard-tales-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesSpellsKeywordPage />;
}
