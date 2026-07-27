import KasteriaPvpServerNorthAmericaKeywordPage, { generateMetadata } from './kasteria-pvp-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaPvpServerNorthAmericaKeywordPage />;
}
