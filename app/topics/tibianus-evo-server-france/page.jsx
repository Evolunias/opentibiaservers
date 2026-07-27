import TibianusEvoServerFranceKeywordPage, { generateMetadata } from './tibianus-evo-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusEvoServerFranceKeywordPage />;
}
