import TibianusEvoServerSwedenKeywordPage, { generateMetadata } from './tibianus-evo-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusEvoServerSwedenKeywordPage />;
}
