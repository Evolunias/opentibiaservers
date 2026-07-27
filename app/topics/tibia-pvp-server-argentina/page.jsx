import TibiaPvpServerArgentinaKeywordPage, { generateMetadata } from './tibia-pvp-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPvpServerArgentinaKeywordPage />;
}
