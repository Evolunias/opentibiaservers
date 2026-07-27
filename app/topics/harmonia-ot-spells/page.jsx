import HarmoniaOtSpellsKeywordPage, { generateMetadata } from './harmonia-ot-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtSpellsKeywordPage />;
}
