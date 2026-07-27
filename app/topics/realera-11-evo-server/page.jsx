import Realera11EvoServerKeywordPage, { generateMetadata } from './realera-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera11EvoServerKeywordPage />;
}
