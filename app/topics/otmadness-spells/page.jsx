import OtmadnessSpellsKeywordPage, { generateMetadata } from './otmadness-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessSpellsKeywordPage />;
}
