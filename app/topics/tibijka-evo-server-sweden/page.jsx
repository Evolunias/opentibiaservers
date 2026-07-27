import TibijkaEvoServerSwedenKeywordPage, { generateMetadata } from './tibijka-evo-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaEvoServerSwedenKeywordPage />;
}
