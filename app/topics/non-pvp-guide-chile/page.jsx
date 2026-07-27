import NonPvpGuideChileKeywordPage, { generateMetadata } from './non-pvp-guide-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpGuideChileKeywordPage />;
}
