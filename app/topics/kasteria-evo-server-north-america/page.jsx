import KasteriaEvoServerNorthAmericaKeywordPage, { generateMetadata } from './kasteria-evo-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaEvoServerNorthAmericaKeywordPage />;
}
