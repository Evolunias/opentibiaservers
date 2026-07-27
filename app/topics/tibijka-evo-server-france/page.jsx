import TibijkaEvoServerFranceKeywordPage, { generateMetadata } from './tibijka-evo-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaEvoServerFranceKeywordPage />;
}
