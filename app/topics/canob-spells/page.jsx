import CanobSpellsKeywordPage, { generateMetadata } from './canob-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobSpellsKeywordPage />;
}
