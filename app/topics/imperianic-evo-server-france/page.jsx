import ImperianicEvoServerFranceKeywordPage, { generateMetadata } from './imperianic-evo-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicEvoServerFranceKeywordPage />;
}
