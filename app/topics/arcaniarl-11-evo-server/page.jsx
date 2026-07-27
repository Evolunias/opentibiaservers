import Arcaniarl11EvoServerKeywordPage, { generateMetadata } from './arcaniarl-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl11EvoServerKeywordPage />;
}
