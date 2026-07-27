import RealestaSpellsKeywordPage, { generateMetadata } from './realesta-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaSpellsKeywordPage />;
}
