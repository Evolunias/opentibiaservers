import EvoleraEvoServerUsaKeywordPage, { generateMetadata } from './evolera-evo-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraEvoServerUsaKeywordPage />;
}
