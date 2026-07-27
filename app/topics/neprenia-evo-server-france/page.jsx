import NepreniaEvoServerFranceKeywordPage, { generateMetadata } from './neprenia-evo-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaEvoServerFranceKeywordPage />;
}
