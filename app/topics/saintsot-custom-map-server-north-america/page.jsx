import SaintsotCustomMapServerNorthAmericaKeywordPage, { generateMetadata } from './saintsot-custom-map-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotCustomMapServerNorthAmericaKeywordPage />;
}
