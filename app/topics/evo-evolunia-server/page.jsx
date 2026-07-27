import EvoEvoluniaServerKeywordPage, { generateMetadata } from './evo-evolunia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoEvoluniaServerKeywordPage />;
}
