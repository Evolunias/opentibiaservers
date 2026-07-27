import Arcaniarl12EvoServerKeywordPage, { generateMetadata } from './arcaniarl-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl12EvoServerKeywordPage />;
}
