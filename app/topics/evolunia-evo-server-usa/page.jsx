import EvoluniaEvoServerUsaKeywordPage, { generateMetadata } from './evolunia-evo-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaEvoServerUsaKeywordPage />;
}
