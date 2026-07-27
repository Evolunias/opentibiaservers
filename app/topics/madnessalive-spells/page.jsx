import MadnessaliveSpellsKeywordPage, { generateMetadata } from './madnessalive-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveSpellsKeywordPage />;
}
