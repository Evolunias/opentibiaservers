import KasteriaPvpeServerUsaKeywordPage, { generateMetadata } from './kasteria-pvpe-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaPvpeServerUsaKeywordPage />;
}
