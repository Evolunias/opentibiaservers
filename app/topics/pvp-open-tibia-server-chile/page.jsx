import PvpOpenTibiaServerChileKeywordPage, { generateMetadata } from './pvp-open-tibia-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpOpenTibiaServerChileKeywordPage />;
}
