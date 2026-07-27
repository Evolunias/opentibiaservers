import TibijkaPvpServerSwedenKeywordPage, { generateMetadata } from './tibijka-pvp-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaPvpServerSwedenKeywordPage />;
}
