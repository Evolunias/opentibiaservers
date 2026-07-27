import ShadowcoresSpellsKeywordPage, { generateMetadata } from './shadowcores-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresSpellsKeywordPage />;
}
