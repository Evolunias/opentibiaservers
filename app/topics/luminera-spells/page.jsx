import LumineraSpellsKeywordPage, { generateMetadata } from './luminera-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraSpellsKeywordPage />;
}
