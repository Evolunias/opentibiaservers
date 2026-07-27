import SaintsotCustomMapServerChileKeywordPage, { generateMetadata } from './saintsot-custom-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotCustomMapServerChileKeywordPage />;
}
