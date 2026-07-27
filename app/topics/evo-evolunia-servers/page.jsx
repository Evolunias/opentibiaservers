import EvoEvoluniaServersKeywordPage, { generateMetadata } from './evo-evolunia-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoEvoluniaServersKeywordPage />;
}
