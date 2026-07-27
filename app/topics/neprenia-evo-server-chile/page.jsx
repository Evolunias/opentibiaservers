import NepreniaEvoServerChileKeywordPage, { generateMetadata } from './neprenia-evo-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaEvoServerChileKeywordPage />;
}
