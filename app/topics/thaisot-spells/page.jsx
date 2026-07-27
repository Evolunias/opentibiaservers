import ThaisotSpellsKeywordPage, { generateMetadata } from './thaisot-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotSpellsKeywordPage />;
}
