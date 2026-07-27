import TibiaraSpellsKeywordPage, { generateMetadata } from './tibiara-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraSpellsKeywordPage />;
}
