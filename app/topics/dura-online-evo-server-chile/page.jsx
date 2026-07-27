import DuraOnlineEvoServerChileKeywordPage, { generateMetadata } from './dura-online-evo-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineEvoServerChileKeywordPage />;
}
