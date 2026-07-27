import BlazeraEvoServerUsaKeywordPage, { generateMetadata } from './blazera-evo-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraEvoServerUsaKeywordPage />;
}
