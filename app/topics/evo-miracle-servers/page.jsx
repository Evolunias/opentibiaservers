import EvoMiracleServersKeywordPage, { generateMetadata } from './evo-miracle-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoMiracleServersKeywordPage />;
}
