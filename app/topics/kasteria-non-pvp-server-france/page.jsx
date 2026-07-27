import KasteriaNonPvpServerFranceKeywordPage, { generateMetadata } from './kasteria-non-pvp-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaNonPvpServerFranceKeywordPage />;
}
