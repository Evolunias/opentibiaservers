import BlazeraPvpServerSwedenKeywordPage, { generateMetadata } from './blazera-pvp-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraPvpServerSwedenKeywordPage />;
}
