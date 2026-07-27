import MidhemRealMapServersChileKeywordPage, { generateMetadata } from './midhem-real-map-servers-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemRealMapServersChileKeywordPage />;
}
