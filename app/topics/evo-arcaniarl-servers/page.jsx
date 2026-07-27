import EvoArcaniarlServersKeywordPage, { generateMetadata } from './evo-arcaniarl-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoArcaniarlServersKeywordPage />;
}
