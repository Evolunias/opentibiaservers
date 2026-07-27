import KasteriaPvpeServerLatinAmericaKeywordPage, { generateMetadata } from './kasteria-pvpe-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaPvpeServerLatinAmericaKeywordPage />;
}
