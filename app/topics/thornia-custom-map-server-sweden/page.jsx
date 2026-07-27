import ThorniaCustomMapServerSwedenKeywordPage, { generateMetadata } from './thornia-custom-map-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaCustomMapServerSwedenKeywordPage />;
}
