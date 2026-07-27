import TibijkaSpellsKeywordPage, { generateMetadata } from './tibijka-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaSpellsKeywordPage />;
}
