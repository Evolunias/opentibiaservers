import MidhemPvpServerSwedenKeywordPage, { generateMetadata } from './midhem-pvp-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemPvpServerSwedenKeywordPage />;
}
