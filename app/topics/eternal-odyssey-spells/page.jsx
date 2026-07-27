import EternalOdysseySpellsKeywordPage, { generateMetadata } from './eternal-odyssey-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseySpellsKeywordPage />;
}
