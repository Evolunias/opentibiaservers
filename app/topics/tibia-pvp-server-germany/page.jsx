import TibiaPvpServerGermanyKeywordPage, { generateMetadata } from './tibia-pvp-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPvpServerGermanyKeywordPage />;
}
