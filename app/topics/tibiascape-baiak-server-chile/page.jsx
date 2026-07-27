import TibiascapeBaiakServerChileKeywordPage, { generateMetadata } from './tibiascape-baiak-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeBaiakServerChileKeywordPage />;
}
