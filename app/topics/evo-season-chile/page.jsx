import EvoSeasonChileKeywordPage, { generateMetadata } from './evo-season-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoSeasonChileKeywordPage />;
}
