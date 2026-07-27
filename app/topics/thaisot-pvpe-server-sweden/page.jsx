import ThaisotPvpeServerSwedenKeywordPage, { generateMetadata } from './thaisot-pvpe-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotPvpeServerSwedenKeywordPage />;
}
