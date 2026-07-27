import KasteriaPvpeServerNorthAmericaKeywordPage, { generateMetadata } from './kasteria-pvpe-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaPvpeServerNorthAmericaKeywordPage />;
}
