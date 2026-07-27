import LumineraEvoServerChileKeywordPage, { generateMetadata } from './luminera-evo-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraEvoServerChileKeywordPage />;
}
