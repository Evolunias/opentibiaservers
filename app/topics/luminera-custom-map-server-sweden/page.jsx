import LumineraCustomMapServerSwedenKeywordPage, { generateMetadata } from './luminera-custom-map-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraCustomMapServerSwedenKeywordPage />;
}
