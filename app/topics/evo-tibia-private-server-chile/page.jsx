import EvoTibiaPrivateServerChileKeywordPage, { generateMetadata } from './evo-tibia-private-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoTibiaPrivateServerChileKeywordPage />;
}
