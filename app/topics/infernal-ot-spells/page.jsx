import InfernalOtSpellsKeywordPage, { generateMetadata } from './infernal-ot-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtSpellsKeywordPage />;
}
