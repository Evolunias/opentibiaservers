import EvoOxygenotServerKeywordPage, { generateMetadata } from './evo-oxygenot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoOxygenotServerKeywordPage />;
}
