import Arcaniarl15EvoServerKeywordPage, { generateMetadata } from './arcaniarl-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl15EvoServerKeywordPage />;
}
