import RubinotCustomMapServerSwedenKeywordPage, { generateMetadata } from './rubinot-custom-map-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotCustomMapServerSwedenKeywordPage />;
}
