import TibiantisEvoServerUsaKeywordPage, { generateMetadata } from './tibiantis-evo-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisEvoServerUsaKeywordPage />;
}
