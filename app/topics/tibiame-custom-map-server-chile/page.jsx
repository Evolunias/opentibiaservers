import TibiameCustomMapServerChileKeywordPage, { generateMetadata } from './tibiame-custom-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameCustomMapServerChileKeywordPage />;
}
