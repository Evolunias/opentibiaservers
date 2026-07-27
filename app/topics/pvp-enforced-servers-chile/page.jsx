import PvpEnforcedServersChileKeywordPage, { generateMetadata } from './pvp-enforced-servers-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedServersChileKeywordPage />;
}
