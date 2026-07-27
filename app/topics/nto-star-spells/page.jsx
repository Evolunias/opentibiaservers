import NtoStarSpellsKeywordPage, { generateMetadata } from './nto-star-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarSpellsKeywordPage />;
}
