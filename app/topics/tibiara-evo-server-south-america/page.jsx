import TibiaraEvoServerSouthAmericaKeywordPage, { generateMetadata } from './tibiara-evo-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraEvoServerSouthAmericaKeywordPage />;
}
