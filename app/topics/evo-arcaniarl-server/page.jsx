import EvoArcaniarlServerKeywordPage, { generateMetadata } from './evo-arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoArcaniarlServerKeywordPage />;
}
