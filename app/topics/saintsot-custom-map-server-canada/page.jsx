import SaintsotCustomMapServerCanadaKeywordPage, { generateMetadata } from './saintsot-custom-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotCustomMapServerCanadaKeywordPage />;
}
