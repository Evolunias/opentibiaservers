import OriginaltibiaSpellsKeywordPage, { generateMetadata } from './originaltibia-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaSpellsKeywordPage />;
}
