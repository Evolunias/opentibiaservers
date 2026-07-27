import RealestaRealMapServersChileKeywordPage, { generateMetadata } from './realesta-real-map-servers-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaRealMapServersChileKeywordPage />;
}
