import NepreniaSpellsKeywordPage, { generateMetadata } from './neprenia-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaSpellsKeywordPage />;
}
