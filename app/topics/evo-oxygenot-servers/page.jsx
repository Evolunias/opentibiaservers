import EvoOxygenotServersKeywordPage, { generateMetadata } from './evo-oxygenot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoOxygenotServersKeywordPage />;
}
