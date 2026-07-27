import EvoServerListChileKeywordPage, { generateMetadata } from './evo-server-list-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerListChileKeywordPage />;
}
