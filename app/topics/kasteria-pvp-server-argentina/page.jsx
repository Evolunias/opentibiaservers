import KasteriaPvpServerArgentinaKeywordPage, { generateMetadata } from './kasteria-pvp-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaPvpServerArgentinaKeywordPage />;
}
