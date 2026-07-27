import TibijkaCustomMapServerChileKeywordPage, { generateMetadata } from './tibijka-custom-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaCustomMapServerChileKeywordPage />;
}
