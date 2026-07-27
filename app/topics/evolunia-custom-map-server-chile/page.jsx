import EvoluniaCustomMapServerChileKeywordPage, { generateMetadata } from './evolunia-custom-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaCustomMapServerChileKeywordPage />;
}
