import Realesta15EvoServerKeywordPage, { generateMetadata } from './realesta-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta15EvoServerKeywordPage />;
}
