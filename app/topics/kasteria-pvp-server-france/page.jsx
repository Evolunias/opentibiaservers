import KasteriaPvpServerFranceKeywordPage, { generateMetadata } from './kasteria-pvp-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaPvpServerFranceKeywordPage />;
}
