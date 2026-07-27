import MiracleSpellsKeywordPage, { generateMetadata } from './miracle-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleSpellsKeywordPage />;
}
