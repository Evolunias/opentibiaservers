import ShadowcoresPvpServerSwedenKeywordPage, { generateMetadata } from './shadowcores-pvp-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresPvpServerSwedenKeywordPage />;
}
