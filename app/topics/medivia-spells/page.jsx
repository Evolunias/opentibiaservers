import MediviaSpellsKeywordPage, { generateMetadata } from './medivia-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaSpellsKeywordPage />;
}
