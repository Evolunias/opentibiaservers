import NilotCustomMapServerChileKeywordPage, { generateMetadata } from './nilot-custom-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotCustomMapServerChileKeywordPage />;
}
