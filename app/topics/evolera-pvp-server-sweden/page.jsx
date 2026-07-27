import EvoleraPvpServerSwedenKeywordPage, { generateMetadata } from './evolera-pvp-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraPvpServerSwedenKeywordPage />;
}
