import NilotPvpeServerSwedenKeywordPage, { generateMetadata } from './nilot-pvpe-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotPvpeServerSwedenKeywordPage />;
}
