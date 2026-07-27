import SaintsotCustomMapServerMexicoKeywordPage, { generateMetadata } from './saintsot-custom-map-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotCustomMapServerMexicoKeywordPage />;
}
