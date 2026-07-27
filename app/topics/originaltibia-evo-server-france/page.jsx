import OriginaltibiaEvoServerFranceKeywordPage, { generateMetadata } from './originaltibia-evo-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaEvoServerFranceKeywordPage />;
}
