import EvoMiracleServerKeywordPage, { generateMetadata } from './evo-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoMiracleServerKeywordPage />;
}
