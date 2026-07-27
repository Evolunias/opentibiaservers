import RangerSArcaniSpellsKeywordPage, { generateMetadata } from './ranger-s-arcani-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniSpellsKeywordPage />;
}
