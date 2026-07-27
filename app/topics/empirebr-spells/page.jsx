import EmpirebrSpellsKeywordPage, { generateMetadata } from './empirebr-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrSpellsKeywordPage />;
}
