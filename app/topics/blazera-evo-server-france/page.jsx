import BlazeraEvoServerFranceKeywordPage, { generateMetadata } from './blazera-evo-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraEvoServerFranceKeywordPage />;
}
