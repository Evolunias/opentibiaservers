import NonPvpServerSwedenKeywordPage, { generateMetadata } from './non-pvp-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpServerSwedenKeywordPage />;
}
