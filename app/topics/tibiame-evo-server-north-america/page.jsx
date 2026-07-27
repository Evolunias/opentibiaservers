import TibiameEvoServerNorthAmericaKeywordPage, { generateMetadata } from './tibiame-evo-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameEvoServerNorthAmericaKeywordPage />;
}
