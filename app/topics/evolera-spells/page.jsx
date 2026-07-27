import EvoleraSpellsKeywordPage, { generateMetadata } from './evolera-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraSpellsKeywordPage />;
}
