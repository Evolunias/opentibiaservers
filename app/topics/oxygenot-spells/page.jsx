import OxygenotSpellsKeywordPage, { generateMetadata } from './oxygenot-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotSpellsKeywordPage />;
}
