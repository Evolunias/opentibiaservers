import Realesta11EvoServerKeywordPage, { generateMetadata } from './realesta-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta11EvoServerKeywordPage />;
}
