import RealeraSpellsKeywordPage, { generateMetadata } from './realera-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraSpellsKeywordPage />;
}
