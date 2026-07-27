import AlasteraNonPvpServerSwedenKeywordPage, { generateMetadata } from './alastera-non-pvp-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraNonPvpServerSwedenKeywordPage />;
}
