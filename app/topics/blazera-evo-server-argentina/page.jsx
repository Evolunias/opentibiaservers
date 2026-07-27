import BlazeraEvoServerArgentinaKeywordPage, { generateMetadata } from './blazera-evo-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraEvoServerArgentinaKeywordPage />;
}
