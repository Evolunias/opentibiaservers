import TibiaretroSpellsKeywordPage, { generateMetadata } from './tibiaretro-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroSpellsKeywordPage />;
}
