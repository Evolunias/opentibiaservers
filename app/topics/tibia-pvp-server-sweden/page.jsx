import TibiaPvpServerSwedenKeywordPage, { generateMetadata } from './tibia-pvp-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPvpServerSwedenKeywordPage />;
}
