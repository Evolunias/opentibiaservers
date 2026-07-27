import DuraOnlineRetroServerChileKeywordPage, { generateMetadata } from './dura-online-retro-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineRetroServerChileKeywordPage />;
}
