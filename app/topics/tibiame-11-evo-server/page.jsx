import Tibiame11EvoServerKeywordPage, { generateMetadata } from './tibiame-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame11EvoServerKeywordPage />;
}
