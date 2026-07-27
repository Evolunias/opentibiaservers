import ElderaEvoServerFranceKeywordPage, { generateMetadata } from './eldera-evo-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaEvoServerFranceKeywordPage />;
}
