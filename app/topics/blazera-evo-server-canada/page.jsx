import BlazeraEvoServerCanadaKeywordPage, { generateMetadata } from './blazera-evo-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraEvoServerCanadaKeywordPage />;
}
