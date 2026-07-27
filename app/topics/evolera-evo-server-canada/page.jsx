import EvoleraEvoServerCanadaKeywordPage, { generateMetadata } from './evolera-evo-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraEvoServerCanadaKeywordPage />;
}
