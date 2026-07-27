import AmeriaCustomMapServerChileKeywordPage, { generateMetadata } from './ameria-custom-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaCustomMapServerChileKeywordPage />;
}
