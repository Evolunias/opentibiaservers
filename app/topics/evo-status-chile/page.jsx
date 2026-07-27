import EvoStatusChileKeywordPage, { generateMetadata } from './evo-status-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoStatusChileKeywordPage />;
}
