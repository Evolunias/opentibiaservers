import DuraOnlineCustomMapServerSwedenKeywordPage, { generateMetadata } from './dura-online-custom-map-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineCustomMapServerSwedenKeywordPage />;
}
