import ArcaniarlEvoServerFranceKeywordPage, { generateMetadata } from './arcaniarl-evo-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlEvoServerFranceKeywordPage />;
}
