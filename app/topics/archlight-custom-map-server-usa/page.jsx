import ArchlightCustomMapServerUsaKeywordPage, { generateMetadata } from './archlight-custom-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightCustomMapServerUsaKeywordPage />;
}
