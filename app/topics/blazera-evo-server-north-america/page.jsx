import BlazeraEvoServerNorthAmericaKeywordPage, { generateMetadata } from './blazera-evo-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraEvoServerNorthAmericaKeywordPage />;
}
