import NoxiousotSpellsKeywordPage, { generateMetadata } from './noxiousot-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotSpellsKeywordPage />;
}
