import MidhemPvpeServerChileKeywordPage, { generateMetadata } from './midhem-pvpe-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemPvpeServerChileKeywordPage />;
}
