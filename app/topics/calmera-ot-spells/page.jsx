import CalmeraOtSpellsKeywordPage, { generateMetadata } from './calmera-ot-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtSpellsKeywordPage />;
}
