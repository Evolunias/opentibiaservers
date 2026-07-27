import TibiaPvpServerMexicoKeywordPage, { generateMetadata } from './tibia-pvp-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPvpServerMexicoKeywordPage />;
}
