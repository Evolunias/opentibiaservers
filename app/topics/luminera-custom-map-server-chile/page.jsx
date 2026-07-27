import LumineraCustomMapServerChileKeywordPage, { generateMetadata } from './luminera-custom-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraCustomMapServerChileKeywordPage />;
}
