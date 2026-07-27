import TibiameSpellsKeywordPage, { generateMetadata } from './tibiame-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameSpellsKeywordPage />;
}
