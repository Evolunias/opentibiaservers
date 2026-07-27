import EvoClientChileKeywordPage, { generateMetadata } from './evo-client-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoClientChileKeywordPage />;
}
