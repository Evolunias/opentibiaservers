import WithActivePlayersStatusChileKeywordPage, { generateMetadata } from './with-active-players-status-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersStatusChileKeywordPage />;
}
