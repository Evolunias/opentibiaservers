import RetroTibiaPrivateServerChileKeywordPage, { generateMetadata } from './retro-tibia-private-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroTibiaPrivateServerChileKeywordPage />;
}
