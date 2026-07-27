import SaintsotCustomMapServerUsaKeywordPage, { generateMetadata } from './saintsot-custom-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotCustomMapServerUsaKeywordPage />;
}
