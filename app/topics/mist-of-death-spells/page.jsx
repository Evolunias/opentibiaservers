import MistOfDeathSpellsKeywordPage, { generateMetadata } from './mist-of-death-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathSpellsKeywordPage />;
}
