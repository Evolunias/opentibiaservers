import AmeriaPvpServerSwedenKeywordPage, { generateMetadata } from './ameria-pvp-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaPvpServerSwedenKeywordPage />;
}
