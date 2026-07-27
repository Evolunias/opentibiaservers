import SaintsotCustomMapServerSwedenKeywordPage, { generateMetadata } from './saintsot-custom-map-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotCustomMapServerSwedenKeywordPage />;
}
