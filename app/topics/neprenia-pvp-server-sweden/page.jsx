import NepreniaPvpServerSwedenKeywordPage, { generateMetadata } from './neprenia-pvp-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaPvpServerSwedenKeywordPage />;
}
