import ThaisotEvoServerChileKeywordPage, { generateMetadata } from './thaisot-evo-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotEvoServerChileKeywordPage />;
}
