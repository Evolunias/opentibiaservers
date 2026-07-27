import MidhemPvpServerChileKeywordPage, { generateMetadata } from './midhem-pvp-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemPvpServerChileKeywordPage />;
}
