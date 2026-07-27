import KasteriaPvpeServerArgentinaKeywordPage, { generateMetadata } from './kasteria-pvpe-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaPvpeServerArgentinaKeywordPage />;
}
