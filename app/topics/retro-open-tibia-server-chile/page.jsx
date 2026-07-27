import RetroOpenTibiaServerChileKeywordPage, { generateMetadata } from './retro-open-tibia-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroOpenTibiaServerChileKeywordPage />;
}
