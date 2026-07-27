import SabrehavenCustomMapServerSwedenKeywordPage, { generateMetadata } from './sabrehaven-custom-map-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenCustomMapServerSwedenKeywordPage />;
}
