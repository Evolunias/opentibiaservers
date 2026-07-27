import MediviaNonPvpServerSwedenKeywordPage, { generateMetadata } from './medivia-non-pvp-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaNonPvpServerSwedenKeywordPage />;
}
