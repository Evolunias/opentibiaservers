import MidhemSpellsKeywordPage, { generateMetadata } from './midhem-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemSpellsKeywordPage />;
}
