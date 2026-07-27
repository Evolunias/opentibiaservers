import SaintsotCustomMapServerBrazilKeywordPage, { generateMetadata } from './saintsot-custom-map-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotCustomMapServerBrazilKeywordPage />;
}
