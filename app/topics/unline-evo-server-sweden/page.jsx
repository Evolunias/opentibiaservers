import UnlineEvoServerSwedenKeywordPage, { generateMetadata } from './unline-evo-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineEvoServerSwedenKeywordPage />;
}
