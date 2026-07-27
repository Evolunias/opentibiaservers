import NilotSpellsKeywordPage, { generateMetadata } from './nilot-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotSpellsKeywordPage />;
}
