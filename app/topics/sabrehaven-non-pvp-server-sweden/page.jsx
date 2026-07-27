import SabrehavenNonPvpServerSwedenKeywordPage, { generateMetadata } from './sabrehaven-non-pvp-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenNonPvpServerSwedenKeywordPage />;
}
