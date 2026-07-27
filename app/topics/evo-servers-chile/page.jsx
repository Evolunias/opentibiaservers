import EvoServersChileKeywordPage, { generateMetadata } from './evo-servers-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServersChileKeywordPage />;
}
