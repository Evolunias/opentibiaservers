import AlasteraSpellsKeywordPage, { generateMetadata } from './alastera-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraSpellsKeywordPage />;
}
