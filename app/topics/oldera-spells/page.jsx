import OlderaSpellsKeywordPage, { generateMetadata } from './oldera-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaSpellsKeywordPage />;
}
