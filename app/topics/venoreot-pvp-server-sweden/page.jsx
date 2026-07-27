import VenoreotPvpServerSwedenKeywordPage, { generateMetadata } from './venoreot-pvp-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotPvpServerSwedenKeywordPage />;
}
