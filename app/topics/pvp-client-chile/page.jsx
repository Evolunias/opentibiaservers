import PvpClientChileKeywordPage, { generateMetadata } from './pvp-client-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpClientChileKeywordPage />;
}
