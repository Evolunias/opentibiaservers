import SabrehavenSpellsKeywordPage, { generateMetadata } from './sabrehaven-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenSpellsKeywordPage />;
}
