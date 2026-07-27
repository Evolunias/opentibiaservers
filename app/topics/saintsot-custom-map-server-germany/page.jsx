import SaintsotCustomMapServerGermanyKeywordPage, { generateMetadata } from './saintsot-custom-map-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotCustomMapServerGermanyKeywordPage />;
}
