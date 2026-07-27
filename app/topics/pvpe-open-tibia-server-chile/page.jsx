import PvpeOpenTibiaServerChileKeywordPage, { generateMetadata } from './pvpe-open-tibia-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeOpenTibiaServerChileKeywordPage />;
}
