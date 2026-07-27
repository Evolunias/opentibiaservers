import ThaisotPvpServerSwedenKeywordPage, { generateMetadata } from './thaisot-pvp-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotPvpServerSwedenKeywordPage />;
}
